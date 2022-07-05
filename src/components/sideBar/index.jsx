import React from "react";
import style from "./sideBar.module.scss";

export default function SideBar() {
    return(
            <div className={style.wrapper}>
                <div>
                    <h3>Side Bar</h3>
                    <ul>
                        <li>Add Card: it should add a new card with a randomly generated and unique number.</li>
                        <li>Sort Cards: it should sort all of the cards by their numbers, from lowest to highest.</li>
                    </ul>
                </div>     
            </div>
    )
}