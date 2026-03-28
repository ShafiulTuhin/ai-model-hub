import React, { useState } from "react";

const ModelCard = ({ model, cart, setCart, handleCart }) => {
  const handleSubscribeButton = () => {
    setSubscribe(!subscribe);
    handleCart(model);
  };

  const { status, title, price, image, description } = model;

  const [subscribe, setSubscribe] = useState(false);
  return (
    <div className="card bg-slate-200 shadow-sm mt-8">
      <div className="card-body">
        <span className={`badge badge-xs p-3 font-bold bg-warning`}>
          {status}
        </span>
        <img src={image} alt="" className="w-40 h-40 mx-auto" />
        <div className="flex justify-between my-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-xl">${price}/mo</span>
        </div>
        <p className="text-[#797979]">{description}</p>

        <div>
          <button
            onClick={handleSubscribeButton}
            className={`btn ${!subscribe ? "bg-[#e8000c] " : "btn-success"} btn-block font-bold text-white`}
          >
            {subscribe ? "Subscribed" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
