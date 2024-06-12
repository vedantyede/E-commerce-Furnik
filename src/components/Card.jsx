const Card = ({ data }) => {
  return (
    <div className="flex flex-col justify-center rounded-lg min-h-96 min-w-52 m-4">
      <div className="flex flex-col items-center">
        <div className="top-0 flex relative justify-center group">
          <img
            className="object-cover rounded-lg w-52 h-64"
            src={data.img}
            alt=""
          />
          <div className="absolute bottom-0 px-8 mb-3 py-2 rounded-full text-white opacity-80 bg-slate-800 group-hover:flex hidden cursor-pointer">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="">Add to Cart</span>
          </div>
        </div>
      </div>
      <div className="font-semibold h-6 overflow-hidden">{data.name}</div>
      <div className="text-slate-500 font-sans overflow-hidden h-4 text-xs max-w-60">
        {data.description}
      </div>
      <div className="text-slate-800 flex">
        <span class="material-symbols-outlined">star</span>
        {data.rating}
      </div>
      <div className="font-semibold">$ {data.price}</div>
    </div>
  );
};

export default Card;
