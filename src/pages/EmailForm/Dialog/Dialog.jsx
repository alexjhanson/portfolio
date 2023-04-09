import './Dialog.scss';

import { useEffect } from "react"

export default function Dialog(props) {

    useEffect(() => {
        setTimeout(() => props.closeDialog(), 4000);
    })

    return (
        <div className="email__result">
            <h1 className="email__result__status">{props.result.h1}</h1>
            <p className="email__result__message">{props.result.p}</p>
        </div>
    )
}