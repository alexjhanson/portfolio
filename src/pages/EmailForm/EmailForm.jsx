import { useState } from 'react';
import './EmailForm.scss'

export default function EmailForm(props) {

    const[state, setState] = useState({
        from: '',
        subject: '',
        message: '',
    });

    function handleChange(e) {
        setState({...state, ...{[e.target.name]: e.target.value}});
    }

    function handleSend() {
        console.log('sending email...')
        let payload = {...state};
        fetch(`https://alexhanson.biz/.netlify/functions/sendemail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...payload})
        })
        .then(res => {
            console.log(`${res.status}: ${res}`);
        })
     }

    return (
        
        <div className="page email fade-in">
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
                <button className="animated-btn" onClick={e => handleSend}>SEND</button>
            </form>
        </div>
    );
}