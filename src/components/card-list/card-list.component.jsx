import React, { Component } from "react";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const { monsters } = this.props;

    return (
      <React.Fragment>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default CardList;
