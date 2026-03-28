import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Model from "./components/Models/Models";
import NavBar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Tabs from "./components/Tabs/Tabs";
import { ToastContainer, toast } from "react-toastify";

const fetchModels = async () => {
  const url = "/models.json";
  const res = await fetch(url);
  return res.json();
};

const modelsPromise = fetchModels();

function App() {
  const [tab, setTab] = useState("Models");
  const [cart, setCart] = useState([]);

  console.log(cart);
  const handleCart = (model) => {
    const exists = cart.find((c) => c.id === model.id);
    if (!exists) {
      setCart([...cart, model]);
      toast.success(`${model.title} added successfully`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error(`${model.title} already in the cart`);
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Tabs tab={tab} setTab={setTab} carts={cart}></Tabs>
      {tab === "Models" && (
        <Model
          modelsPromise={modelsPromise}
          cart={cart}
          setCart={setCart}
          handleCart={handleCart}
        ></Model>
      )}

      {tab === "Cart" && <Cart carts={cart} setCart={setCart}></Cart>}

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
