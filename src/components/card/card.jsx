import React, { useContext } from "react";
import { CardContext } from "../../App";
import style from "./card.module.scss";
import DelCard from "./delCard";

export default function Card({ item, index }) {
    const { arr, setArr } = useContext(CardContext)

    return (
            <div className={style.card}>
                <div className={style.closer}>
                     <DelCard arr={arr}  setArr={setArr}  index={index} />
                </div>
                <div className={style.d_flex_jcc_aic}>
                    <h1>{item}</h1>
                </div>

            </div>
    )
}
