import Navbar from "../Navbar/Navbar";
//import Banner from "../Banner/Banner";
import Products from "../Products/Products";
/*//////////////////////////////////////////////*/
import Hearder from "../Header";
import Fondo from "../Fondo";
import CardsInfo from "../CardsInfo";
import CarouselComponent from "../Carousel";
import Footer from "../Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hearder />
      <Navbar />
      <div className="containe">
        <Fondo />
      </div>
      <div className="jumbotron">
        <CarouselComponent />
      </div>
      <div className="containe bg-amber-100">
        <span class="placeholder col-12 placeholder-lg"></span>
        <h1 className='title text-center font-bold'>Nuestras Marcas</h1>
        <CardsInfo />
      </div>
      <div className="containe bg-amber-100">
        <span class="placeholder col-12 placeholder-lg"></span>
        <h1 className='title text-center font-bold'>Productos detacados</h1>
        <div className="product-card-container">
          <Products />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
