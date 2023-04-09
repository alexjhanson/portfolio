import './Loading.scss';

export default function Loading(props) {
    return (
        <div className="loader">
            <h1>{props.item}</h1>
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}