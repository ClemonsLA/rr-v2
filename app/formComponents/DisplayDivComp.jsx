'use client'
import {useState} from "react"

/*
Game Plan:
make some components, put them in divArr (below).
add some buttons.
add state?
*/
export default function DisplayDivComp(){
    const [myDiv, setMyDiv] = useState(0);
    const divArr = [<div>Div 1</div>, <div>Div 2</div>, <div>Div 3</div>];

    function nextDiv(){
        const theNewDiv = myDiv + 1;
        setMyDiv(theNewDiv);
    }

    return(
        <div>
            {divArr[myDiv]}
            <div>button2</div>
        </div>
    )
}