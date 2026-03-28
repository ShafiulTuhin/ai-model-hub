const Tabs = ({ tab, setTab }) => {
  return (
    <div
      role="tablist"
      className=" py-10 tabs tabs-lift flex justify-center gap-10"
    >
      <button
        onClick={() => setTab("Models")}
        className={`btn ${tab === "Models" ? " btn-warning" : ""}`}
      >
        Models
      </button>

      <button
        onClick={() => setTab("Cart")}
        className={`btn ${tab === "Cart" ? " btn-warning" : ""}`}
      >
        Cart
      </button>
    </div>
  );
};

export default Tabs;
