import './EmailForm.scss'

import Loading from '../../components/Loading/Loading'
import Dialog from './Dialog/Dialog';

import { useRef, useState } from 'react';

export default function EmailForm(props) {

    const form = useRef(null);

    const[state, setState] = useState({
        from: '',
        subject: '',
        message: '',
        dialog: false,
        sending: false,
        result: {
            h1: '',
            p: ''
        },
    });

    function handleChange(e) {
        setState({...state, ...{[e.target.name]: e.target.value}});
    }

    function handleSend() {

        let tmp = {...state};

        const inputs = form.current.querySelectorAll('input, textarea');
        let validation = {
            h1: 'OPPS!',
            p: []
        };

        inputs.forEach((input) => {
            if(!input.validity.valid) {
                if(input.value === '')
                    validation.p.push(`${input.name.toUpperCase()}: is required`);
                else
                    validation.p.push(`${input.name.toUpperCase()}: incorrect format`);
            }else if(/^\s*$/.test(input.value)) {
                validation.p.push(`${input.name.toUpperCase()}: is required`);
            }
        })

        if(validation.p.length) {
            tmp.result = validation;
            tmp.dialog = true;
            setState(tmp)
            return;
        }


        tmp.sending = true;
        setState(tmp);

        const {from, subject, message} = tmp;

        fetch(`https://alexhanson.biz/.netlify/functions/sendemail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({from, subject, message})
        })
        .then(res => {
            let tmp = {...state}
            tmp.dialog = true;
            if(res.ok) {
                tmp.result = {
                    h1: ['Your message was sent successfully!'],
                    p: ["Thanks for reaching out, i'll get back to you soon."]
                }
                tmp.from = tmp.subject = tmp.message = '';
                
            } else {
                tmp.result = {
                    h1: 'Opps something went wrong....',
                    p: ""
                }
            }

            setState(tmp);
        })
    }

    function closeDialog() {
        let tmp = {...state}
        tmp.dialog = false;

        setState(tmp);
    }

    return (
        <div className="email page fade-in">
            <div className="email__form-wrapper">
                <div className="email__hero"></div>
                {state.sending ?
                    <Loading item="Sending Email....." />
                    :
                    <div className="email__form-container">
                        <div ref={form} className="email__form" onSubmit={e => e.preventDefault()}>
                            <h1>Let's Connect!</h1>
                            <label>
                                <span>From</span>
                                <input name="from" type="email" required value={state.from} onChange={e => {handleChange(e)}}/>
                            </label>
                            <label>
                                <span>Subject</span>
                                <input name="subject" type="text" required value={state.subject} onChange={e => {handleChange(e)}}/>
                            </label>
                            <textarea name="message" cols="30" required rows="10" value={state.message} onChange={e => {handleChange(e)}}></textarea>
                            <button className="animated-btn" onClick={handleSend}>SEND</button>
                        </div>
                        {   state.dialog ?
                            <Dialog result={state.result} closeDialog={closeDialog}/>
                            : null
                        }
                    </div>
                }
            </div>
        </div>
    );
}
