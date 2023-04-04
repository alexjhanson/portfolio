import './Description.scss'


export default function Description(props) {

    let description = props.currentItem.description;
    description = description.split(/[\s\n]+/).join(' ');

    return (
        <article className="project-detail">
            <hr className="project-detail__line-rule" />
            <p className="project-detail__description">{description}</p>
            <div className="project-detail__tools">
                <h2>Frameworks / Libraries</h2>
                <ul>
                    {
                        props.currentItem.techStack.map((el, i) => {
                            return <li key={`tool-${i}`}>{el}</li>
                        })
                    }
                </ul>
                <h2>Languages</h2>
                <ul>
                    {
                        props.currentItem.languages.map((el, i) => {
                            return <li key={`tool-${i}`}>{el}</li>
                        })
                    }
                </ul>
            </div>
        </article>
    )
}
