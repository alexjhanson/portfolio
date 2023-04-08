import './EmailForm.scss'

export default function EmailForm(props) {

    return (
        
        <div className="page email fade-in">
            <form className="email__form" onSubmit={e => e.preventDefault()}>
                <h1>Let's Connect!</h1>
                <label>
                    <span>From</span>
                    <input name="from" type="text" />
                </label>
                <label>
                    <span>Subject</span>
                    <input name="subject" type="text" />
                </label>
                <textarea name="message" cols="30" rows="10"></textarea>
                <button className="animated-btn">SEND</button>
            </form>
        </div>
    );
}