const ProductPage = () => {
  return (
    <div className="flex items-center justify-center m-10 gap-10">
      <div className="">
        <img
          className="object-cover rounded-lg w-96 h-96"
          src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <div className="text-3xl font-semibold">Reading Chairs</div>
        <div className="text-sm font-thin">This is a nice reading chair</div>
        <div className="">4.8</div>
        <div className="flex justify-center items-center gap-10">
          <div className="">
            <div className="flex justify-center items-center bottom-0 px-8 mb-3 py-2 rounded-full text-white opacity-80 bg-slate-800 cursor-pointer">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="">Add to Cart</span>
            </div>
          </div>
          <div className="">$ 15000</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
