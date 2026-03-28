import { toast } from "react-toastify";

const Cart = ({ carts, setCart }) => {
  console.log(carts);
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
  const handleClearCart = () => {
    setCart([]);
    toast.success("Checkout successfully!");
  };
  const handleDeleteCart = (cartId) => {
    const filterCart = carts.filter((cart) => cart.id !== cartId.id);
    setCart(filterCart);
    toast.success(`${cartId.title} deleted successfully`, {
      position: "bottom-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-[650px] mx-auto px-4  md:px-0">
      <h2 className="text-center text-2xl font-bold mb-6">Your Carts</h2>
      {carts.length === 0 ? (
        <p className="text-center text-2xl text-[#797979] font-bold pt-4 pb-10">
          The Cart is empty
        </p>
      ) : (
        <>
          {carts.map((cart) => (
            <div
              key={cart.id}
              className=" flex justify-between items-center border-2 border-slate-400 bg-slate-200 p-3 mb-3 rounded-lg"
            >
              <div className="flex gap-2 items-center">
                <img src={cart.image} alt="" className="w-10 h-10" />
                <p>{cart.title}</p>
              </div>
              <p>${cart.price}</p>
              <button
                onClick={() => handleDeleteCart(cart)}
                className="font-bold text-[#797979] cursor-pointer"
              >
                X
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center bg-black text-white font-medium p-3 mb-4 rounded-lg">
            <h2>Total</h2>
            <p>${totalPrice}</p>
          </div>
          <button
            onClick={handleClearCart}
            className="btn bg-[#e8000c] w-full rounded-lg text-white cursor-pointer"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
