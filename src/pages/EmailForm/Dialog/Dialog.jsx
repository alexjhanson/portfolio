import './Dialog.scss';

import { useEffect } from "react"

export default function Dialog(props) {

    useEffect(() => {
        setTimeout(() => props.closeDialog(), 4000);
    })

    return (
        <div className="email__result">
            <h1 className="email__result__status">{props.result.h1}</h1>
            { 
                props.result.p.map((p, i) => {
                    return <p key={`para-${i}`}>{p}</p>
                })
            }
        </div>
    )
}