import React, { Component } from "react";
import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;

//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}`}
//           height="180px"
//           width="180px"
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
// export default Card;

const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}`}
        height="180px"
        width="180px"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
