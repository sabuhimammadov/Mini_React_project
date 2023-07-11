import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "./ProductCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
export class Products extends React.Component {
  static defaultProps = {
    listName: "Product",
  };
  render() {
    // console.log(this.props);
    const products = this.props.products?.map((product, index) => {
      return (
        <ProductCard
          key={"product" + index}
          title={product.title}
          image={product.img_url}
          price={product.price}
          numeral={product.numeral}
        />
      );
    });
    return (
      <>
        <div className="h4 mb-3">{this.props.listName}</div>
        <div className="mb-5">
          <Slider {...settings}>
            {/* <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/> */}
            {products}
          </Slider>
        </div>
      </>
    );
  }
}
Products.propTypes = {
  listName: PropTypes.string,
  products: PropTypes.array,
};
