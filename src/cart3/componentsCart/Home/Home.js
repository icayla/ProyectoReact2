
import Navbar from "../../../components/NavBar";
import Banner from "../Banner/Banner";
import Products from "../ProductsBooks/Products"



const Home = () => {
  return (
    <>
     <Navbar />
      <Banner />
      <div className='product-card-container'>
      <Products />

      </div>
    </>
  );
};


export default Home;
