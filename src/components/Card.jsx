import React from "react";

const Card = ({ style, text, image}) => {
  return image && !text ?(
    <img className="absolute w-15 cursor-grab" src = {image} style={style}/>
  ) : (
    <div
      style={style}
      className="absolute px-1 py-4 text-sm text-center rounded-full
      ring ring-gray-900 font-light bg-slate-800 w-40 cursor-grab text-white"
    >
      {text}
    </div>
  );
};

export default Card;
