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
      <div>
        <Fondo />
      </div>
      <div className="jumbotron">
        <CarouselComponent />
      </div>
      <div className="containe bg-amber-100">
    
        <h1 className='title text-center font-bold text-2xl py-2 bg-teal-500 text-white'>Nuestras Marcas</h1>
        <CardsInfo />
        <h1 className='text-2xl font-bold  py-2   bg-teal-500 text-white text-center'>Nuestros Productos</h1>
        <div className="product-card-container">
       <Products />
     </div>
     <Footer />
      </div>
    
    </>
  );
};

export default Home;
