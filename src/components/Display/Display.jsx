import { useEffect, useState } from "react"

function Display(props) {

    const [text, setText] = useState("ちょいとおまち...");

    useEffect(() => {
        setText(`カウント：${props.count}`);

    }, [props.count]);

    return (
        <div>
            {text}
        </div>
    )
}

export default Display