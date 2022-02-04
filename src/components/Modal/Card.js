import React from 'react';


const Card = (props) => {
  // cardd
  return <div className="modalshownn p-5" onClick={props.onConfirmCard}>{props.children}</div>;
};

export default Card;