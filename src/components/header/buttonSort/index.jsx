import React, { useContext } from "react";
import { CardContext } from "../../../App";
import style from "./buttonSort.module.scss"

export default function ButtonSort() {
    const { arr, setArr } = useContext(CardContext)

    function minMax() {

        let chnageLink = [...arr];

        chnageLink.sort((a, b) => { return a - b })
        
        setArr(chnageLink)

    }
    return  <button className={style.buttonSort} onClick={minMax}> Add Sort</button>

} 