import './Projects.scss';

import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import Description from '../../components/Description/Description';

import PROJECTS from '../../content/ProjectDefinitions';

export default function Projects(props) {

    return (
        <main className="page projects fade-in">
            <PhotoCarousel items={PROJECTS} Description={Description} mobile={props.mobile}/>
        </main>
    );
}


