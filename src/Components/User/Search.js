import React, { useState } from "react";

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   handleSubmit = async (e) => {
//     this.props.searchUsers(this.state.text);
//     e.preventDefault();
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             placeholder="Search User"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <input type="submit" className="btn btn-dark btn-block" />
//         </form>
//       </div>
//     );
//   }
// }

const Search = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter some text in Search Bar");
    } else {
      props.searchUsers(text);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search User"
          onChange={handleChange}
          value={text}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};

export default Search;
