import './About.scss';

export default function About(props) {

    return (
        <main className="page about fade-in">
            <section className="intro center-column">
                <p className="intro__greeting">Hello, </p>
                <h1 className="intro__name">I'm Alex Hanson</h1>
                <h2 className="intro__role">
                    <span className="intro__role--1 inlBlock">Software Engineer </span>
                    <span className="intro__role--2 inlBlock"> & Full Stack Web Developer</span>
                </h2>
                <div className="intro__resume">resume</div>
            </section>
            <div className="headshot"></div>
        </main>
    )
}
