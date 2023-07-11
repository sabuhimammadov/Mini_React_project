import React from "react";
import { Header } from "./Components/Header";
import { Container } from "./utils/Container";
import { Section1 } from "./Components/Section1/index";
import { Products } from "./Components/Section2/Products";

const fruits = [
  {
    title: "Ananas",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CBBOYGCs9tRqWV4jGpTktRTZisJ6Ube-Aw&usqp=CAU",
    price: "3.75",
    numeral: " ədəd",
  },
  {
    title: "Portağal",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs00_6MDIJ0A2YyDs4zoVLFEpSd6IY9V2wiw&usqp=CAU",
    price: "1.75",
    numeral: " kg",
  },
  {
    title: "Kivi",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54hPvZ39cQnBxKRH-w-tH_nUTEEYR-TS6rA&usqp=CAU",
    price: "1.25",
    numeral: " kg",
  },
  {
    title: "Çiyələk",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDLcfqiPHH92uBK-aws-pwIN_x_CqkvOuNw&usqp=CAU",
    price: "2.25",
    numeral: " kg",
  },
];
const Vegetables = [
  {
    title: "Pomidor",
    img_url:
      "https://fins.az/file/articles/2021/04/21/1619005220_38752808_m-1600x1063.jpg",
    price: "2.75",
    numeral: "kg",
  },
  {
    title: "Xiyar",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJnl4FSBVfRvnp0wDRJOdcZCXB2LJpmh7xQ&usqp=CAU",
    price: "1.75",
    numeral: " kg",
  },
  {
    title: "Brokoli",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96sV_ebR30dBXUZ8tkR-16BTAXK-UU2FO8A&usqp=CAU",
    price: "3.25",
    numeral: "kg",
  },
  {
    title: "Bibər",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1sHUFMOxVQiuL7vptRr3qU6gor8id23XWg&usqp=CAU",
    price: "1.25",
    numeral: " kg",
  },
];
const Desserts = [
  {
    title: "Piroq",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Tn4zumP54zicUYXGsAu5Ia7p0hfoQtNcdw&usqp=CAU",
    price: "15.75",
    numeral: "kg",
  },
  {
    title: "Paxlava",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqXQANB86VzF1XRCLEJtl7bULEHKFxUR7BA&usqp=CAU",
    price: "10.75",
    numeral: " kg",
  },
  {
    title: "Şəkərbura",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNcGPUJZFhV4Bjb51m6AIvexOARiWQhJM0w&usqp=CAU",
    price: "6.25",
    numeral: " kg",
  },
  {
    title: "Napoleon",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmBPrQNCUkMJ1PxQRCkTZ35HFhHXyj2kfMA&usqp=CAU",
    price: "9.25",
    numeral: " kg",
  },
];
const Drinks = [
  {
    title: "Fanta",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspoaRE_8R9eCv_5WQ6PMpCnl_ESC8dq43PIX4cEHKncZjJGiZhihAFD1qn6AA8kZ2SX8&usqp=CAU",
    price: "1",
    numeral: " litr",
  },
  {
    title: "Juice",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVk3XOU8HrfR5-TFE4Y0cuh9yQRagSk7fFRA&usqp=CAU",
    price: "1.75",
    numeral: " litr",
  },
  {
    title: "Ayran",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYfQcAssgl8MtEOuRwjCwbTSu9kcbCkKasA&usqp=CAU",
    price: "1.25",
    numeral: " litr",
  },
  {
    title: "Cola",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqN0VpyaOcQfJT3FPs7joW4tcQ2k1q6pUzA&usqp=CAU",
    price: "1.25",
    numeral: "litr",
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Container>
          <Section1 />
          <Products listName="Fruits" products={fruits} />
          <Products listName="Vegetables" products={Vegetables} />
          <Products listName="Desserts" products={Desserts} />
          <Products listName="Drinks" products={Drinks} />
        </Container>
      </>
    );
  }
}
export default App;
