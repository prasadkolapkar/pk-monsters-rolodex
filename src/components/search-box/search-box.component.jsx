import React, { Component } from "react";
import "./search-box.styles.css";

// class SearchBox extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { onChangeHandler, placeholder } = this.props;

//     return (
//       <React.Fragment>
//         <input
//           type="search"
//           className="search-box"
//           placeholder={placeholder}
//           onChange={onChangeHandler}
//         />
//       </React.Fragment>
//     );
//   }
// }
// export default SearchBox;

const SearchBox = (props) => {
  const { onChangeHandler, placeholder } = props;
  return (
    <React.Fragment>
      <input
        type="search"
        className="search-box"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </React.Fragment>
  );
};

export default SearchBox;
