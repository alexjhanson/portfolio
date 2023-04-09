import { useState } from 'react';
import './EmailForm.scss'

export default function EmailForm(props) {

    const[state, setState] = useState({
        from: '',
        subject: '',
        message: '',
        dialog: false,
        sending: false,
        result: null,
    });

    function handleChange(e) {
        setState({...state, ...{[e.target.name]: e.target.value}});
    }

    function handleSend() {

        let tmp = {...state}
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
                    h1: 'Your message was sent successfully!',
                    p: "Thanks for reaching out, i'll get back to you soon."
                }
                
            } else {
                tmp.result = {
                    h1: 'Opps something went wrong....',
                    p: ""
                }
            }
            const id = setTimeout(() => {
                let tmp ={...state};
                tmp.dialog = false;
                clearInterval(id);
                setState(tmp);
            }, 3000)
        })
     }

    return (
        
        <div className="page email fade-in">
            {state.sending ?
                <Sending />
                :
                <form className="email__form" onSubmit={e => e.preventDefault()}>
                    <h1>Let's Connect!</h1>
                    <label>
                        <span>From</span>
                        <input name="from" type="text" value={state.from} onChange={e => {handleChange(e)}}/>
                    </label>
                    <label>
                        <span>Subject</span>
                        <input name="subject" type="text" value={state.subject} onChange={e => {handleChange(e)}}/>
                    </label>
                    <textarea name="message" cols="30" rows="10" value={state.message} onChange={e => {handleChange(e)}}></textarea>
                    <button className="animated-btn" onClick={handleSend}>SEND</button>
                </form>
            }
            {   state.dialog ?
                 <div className="result">
                    <h1 className="result__status">{state.result.h1}</h1>
                    <p className="result__message">{state.result.p}</p>
                </div>
                : null
            }
        </div>
    );
}