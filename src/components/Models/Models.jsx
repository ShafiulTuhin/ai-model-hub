import React, { use } from "react";
import ModelCard from "../ModelCard/ModelCard";

const Model = ({ modelsPromise, cart, setCart, handleCart }) => {
  const modelsData = use(modelsPromise);

  return (
    <div className="mb-10 px-4 lg:px-0">
      <h2 className="text-center font-bold md:text-3xl text-2xl mb-5">
        Choose Your AI Model
      </h2>
      <p className="text-center font-medium text-[#797979]">
        One Subscription gives you to all frontier AI models
      </p>
      <div className="max-w-[1020px] mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
        {modelsData.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            cart={cart}
            setCart={setCart}
            handleCart={handleCart}
          ></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Model;
