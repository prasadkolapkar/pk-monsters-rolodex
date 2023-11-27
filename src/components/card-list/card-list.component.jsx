import React, { Component } from "react";
import "./card-list.styles.css";
class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const { monsters } = this.props;

    return (
      <React.Fragment>
        <div className="card-list">
          {monsters.map((monster) => {
            const { id, name, email } = monster;
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
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default CardList;
