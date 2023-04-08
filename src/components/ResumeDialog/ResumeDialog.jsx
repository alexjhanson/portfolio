import './ResumeDialog.scss';

export default function ResumeDialog(props) {
    return (
         props.resume.display? 
            <div className="resume-dialog fade-in" style={
                    {top: props.resume.y ? props.resume.y : "50%",
                     left:  props.resume.x ? props.resume.x : "50%"
                     }}>
                <h2 className="resume-dialog__message">
                    Would you like to download my resume as a PDF?
                </h2>
                <div className="resume-dialog__btn-container">
                    <a href={process.env.PUBLIC_URL + "resume.pdf"} download className="resume-dialog__btn animated-btn"
                            onClick={e => props.handleCloseResumeDialog()}
                    >YES</a>
                    <button className="resume-dialog__btn animated-btn"
                            onClick={e => props.handleCloseResumeDialog()}>
                    NO</button>
                </div>
            </div>
            :
            null
    )
}