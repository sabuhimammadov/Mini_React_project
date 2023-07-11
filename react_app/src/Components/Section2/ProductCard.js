import React from "react";
import style from "../Section2/Products.module.css";
import { BsPlusSquare } from 'react-icons/bs';
import { CiSquareMinus } from 'react-icons/ci';

export class ProductCard extends React.Component {
  constructor(){
    super()
    this.state = {
      count:1,
    }
  }
  render() {
 //   console.log(this.props)

 const azalt = () =>{
  const newcount = this.state.count <=0 ?0 :this.state.count-1
this.setState({count:newcount})

 }
 const artir = () =>{
  this.setState({count:this.state.count+1})
  
   }
//  console.log(typeof(Number(this.props.price)))
//  console.log(typeof(Number(this.state.count)))

 const totalAmount = Number(this.props.price)*this.state.count
console.log(totalAmount)
    return (
      <div className="me-3">
        <div className="card" style={{ width: "15rem;" }}>
          <img
            src={this.props.image}
            className="card-img-top"
            alt="..."
            style={{width:"100%",height:"275px",objectFit:"cover"}}
          />
          <div className="card-body text-center">
            <h5 className={style["card-title"]}>{this.props.title}</h5>
            <span className={style["span-price"]}>{totalAmount}₼</span> <br />
            <span className={style["span-number"]}>({this.state.count} {this.props.numeral} )</span>
            <p className="card-text mb-3 mt-2 fs-3">Miqdar</p>
            
              <BsPlusSquare className="fs-5" onClick={artir}/>
              <span className="ms-2 me-2 fs-5">{this.state.count}</span>
          
              <CiSquareMinus className="fs-3"  onClick={azalt} /> <br/> <br/>  

           
            <a href="#" className="btn btn-danger">
              Add Basket
            </a>
          </div>
        </div>
      </div>
    );
  }
}
