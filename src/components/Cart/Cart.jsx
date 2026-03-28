const Cart = ({ carts }) => {
  console.log(carts);
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);

  return (
    <div className="max-w-[650px] mx-auto px-4  md:px-0">
      <h2 className="text-center text-2xl font-bold mb-6">Your Carts</h2>
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
        </div>
      ))}

      <div className="flex justify-between items-center bg-black text-white font-medium p-3 mb-4 rounded-lg">
        <h2>Total</h2>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
