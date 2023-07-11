import React from "react";
import style from "../Components/header.module.css"
import { SlBasket } from 'react-icons/sl';
import { BiSearch } from 'react-icons/bi';

export class Header extends React.Component{

    render(){

        return(

            <header className={style["header"]}>
         <div className="container d-flex justify-content-between align-items-center pt-2">
<div className={style["logo-section"]}>
<h2 className={style["logo-title"]}>Products</h2>
<SlBasket className={style["logo-icon"]}/>

</div>
<div className={style["search-section"]}>
    <input className={style["search-input"]} placeholder="Search your Product"/>
    <BiSearch className={style["search-icon"]}/>
</div>
         </div>


            </header>
        )
    }
}