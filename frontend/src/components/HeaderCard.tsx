/* eslint-disable react/prop-types */

const HeaderCard = ({data}) => {
  return (
    <div className="flex">
      <div className="bg-green-100 flex flex-col rounded-lg h-56 m-4">
        <div className=" pl-10 mt-10">
          <div className="text-amber-900 p-1">
            {data.title}
          </div>
          <div className="overflow-hidden text-xs text-slate-500 p-1 w-72 font-thin">
            {data.description}
          </div>
          <div className="text-xs underline p-1 cursor-pointer">VIEW NOW</div>
        </div>
        <div className="flex flex-shrink-0 transform cursor-pointer ml-72 -mt-28 transition duration-300 hover:scale-110 ">
          <img className="h-40 sm:h-60" src={data.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;