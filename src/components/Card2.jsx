import chair1 from "../assets/chair1.png";

const Card2 = ({data}) => {
  return (
    <div>
      <div className="bg-green-100 flex flex-col rounded-lg h-56 m-4">
        <div className=" pl-10 mt-10">
          <div className="text-amber-900 p-1">
            {data.title}
          </div>
          <div className="overflow-hidden text-xs text-slate-500 p-1 w-72 font-thin">
            {data.description}
          </div>
          <div className="text-xs underline p-1">VIEW NOW</div>
        </div>
        <div className="ml-72 -mt-28">
          <img className="h-60 hover:h-64" src={data.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card2;




// import React from "react";
// import chair1 from "../assets/chair1.png";

// const Card2 = () => {
//   return (
//     <div>
//       <div className="relative bg-green-100 flex flex-col rounded-lg h-56 w-4/12 m-4">
//         <div className="absolute pl-10 mt-10">
//           <div className="text-amber-900 p-1">
//             COMFORTABLE <b>CHAIR</b>
//           </div>
//           <div className="overflow-hidden text-xs text-slate-500 p-1 w-72 font-thin">
//             As domed as in former times of great vows, the trioll Road, with its
//             expected clarinet.
//           </div>
//           <div className="text-xs underline p-1">VIEW NOW</div>
//         </div>
//         <div className="absolute -bottom-10 -right-5">
//           <img className="h-60" src={chair1} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card2;
