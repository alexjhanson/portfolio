import './Music.scss';


export default function Music(props) {
    return (
        <main className="page fade-in music">
            <div className="music__page-grid-cell">
                <div className="music__headphones-container">
                    <svg className="music__headphones pulse">
                        <use xlinkHref="sprite.svg#icon-headphones" />
                    </svg>
                </div>
                <div className="music__notes-container">
                    <svg className="music__notes note1">
                        <use xlinkHref="sprite.svg#icon-beamed-note" />
                    </svg>
                    <svg className="music__notes note2">
                        <use xlinkHref="sprite.svg#icon-note" />
                    </svg>
                    <svg className="music__notes note3">
                        <use xlinkHref="sprite.svg#icon-beamed-note" />
                    </svg>
                </div>
                <h2 className="music__coming-soon">Coming Soon</h2>
            </div>
        </main>
    );
}