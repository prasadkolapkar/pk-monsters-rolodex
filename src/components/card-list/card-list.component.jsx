import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
// class CardList extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { monsters } = this.props;

//     return (
//       <React.Fragment>
//         <div className="card-list">
//           {monsters.map((monster) => {
//             return <Card monster={monster} key={monster.id} />;
//           })}
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default CardList;

const CardList = ({ monsters }) => {
  return (
    <React.Fragment>
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default CardList;
