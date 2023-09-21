import "./App.css";
import Header from "./components/Header/Header";
import CardProduct from "./components/CardProduct/CardProduct";

const App = () => {
  return (
    <div>
      <Header />
      <div className="Cards">
        <CardProduct
          name="Bombilla"
          description="Bombilla de alpaca"
          precio="$8500"
          image="./public/bombilla.jpg"
          alt=""
        />
        <CardProduct
          name="Mate"
          description="Mate modelo imperial"
          precio="$15000"
          image="./public/mate.jpg"
          alt=""
        />
        <CardProduct
          name="Termo"
          description="Acero inoxidable por 2Lts"
          precio="$25000"
          image="./public/termo.jpg"
          alt=""
        />
        <CardProduct
          name="Matera"
          description="Matera de cuero"
          precio="$25000"
          image="./public/matera.jpg"
          alt=""
        />
        <CardProduct
          name="Yerba"
          description="Yerba Canarias x 1Kg"
          precio="$4500"
          image="./public/yerba.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
