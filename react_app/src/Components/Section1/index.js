import React from "react";
import style from "../Section1/Section1.module.css"
export class Section1 extends  React.Component{
render(){

    return(

<section className={style["AllProducts-list"]}>
<div className={style["AllProducts"]}>
    <h2>All Products</h2></div>
<div className={style["catagori-product"]}>
<a href="#">Fruits</a>
<a href="#">Vegetables</a>
<a href="#">Desserts</a>
<a href="#">Drinks</a>
<a href="#">Spacy</a>

</div>
</section>

    )
}



}