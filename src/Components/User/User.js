import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../Layout/Spinner";

class User extends Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetUserInfo();
  }

  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div>
        <Link to="/" className="btn btn-light">
          Back to Home
        </Link>
        Hireable :{" "}
        {this.props.user.hireable ? (
          <i className="fa-solid fa-check text-success"></i>
        ) : (
          <i className="fa-solid fa-circle-xmark text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={this.props.user.avatar_url}
              alt="User Profile Picture"
              className="round-img"
              style={{ width: "200px" }}
            />
            <h2>{this.props.user.login}</h2>
            <p>Location : {this.props.user.location}</p>
          </div>
          <div>
            {this.props.user.bio && (
              <>
                <h3>Bio</h3>
                <p>{this.props.user.bio}</p>
              </>
            )}
            <a
              href={this.props.user.html_url}
              className="btn btn-dark my-1"
              target="_blank"
              rel="noreferrer"
            >
              Go to Github Profile
            </a>
            <ul>
              <li>
                <strong>Name :</strong> {this.props.user.name}
              </li>
              {this.props.user.company && (
                <li>
                  <strong>Work :</strong> {this.props.user.company}
                </li>
              )}
              {this.props.user.blog && (
                <li>
                  <strong>Website :</strong> {this.props.user.blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            Followers : {this.props.user.followers}
          </div>
          <div className="badge badge-success">
            Following : {this.props.user.followeing}
          </div>
          <div className="badge badge-light">
            Public Repos : {this.props.user.public_repos}
          </div>
          <div className="badge badge-danger">
            Public Gists : {this.props.user.public_gists}
          </div>
        </div>
        <Repos repos={this.props.repos} />
      </div>
    );
  }
}

// const User = (props) => {
//   useEffect(() => {
//     props.getUserInfo(props.match.params.id);
//     return function () {
//       props.resetUserInfo();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return props.loading ? (
//       <Spinner />
//     ) : (
//       <div>
//         <Link to="/" className="btn btn-light">
//           Back to Home
//         </Link>
//         Hireable :{" "}
//         {props.user.hireable ? (
//           <i className="fa-solid fa-check text-success"></i>
//         ) : (
//           <i className="fa-solid fa-circle-xmark text-danger"></i>
//         )}
//         <div className="card grid-2">
//           <div className="all-center">
//             <img
//               src={props.user.avatar_url}
//               alt="User Profile Picture"
//               className="round-img"
//               style={{ width: "200px" }}
//             />
//             <h2>{props.user.login}</h2>
//             <p>Location : {props.user.location}</p>
//           </div>
//           <div>
//             {props.user.bio && (
//               <>
//                 <h3>Bio</h3>
//                 <p>{props.user.bio}</p>
//               </>
//             )}
//             <a
//               href={props.user.html_url}
//               className="btn btn-dark my-1"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Go to Github Profile
//             </a>
//             <ul>
//               <li>
//                 <strong>Name :</strong> {props.user.name}
//               </li>
//               {props.user.company && (
//                 <li>
//                   <strong>Work :</strong> {props.user.company}
//                 </li>
//               )}
//               {props.user.blog && (
//                 <li>
//                   <strong>Website :</strong> {props.user.blog}
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//         <div className="card text-center">
//           <div className="badge badge-primary">
//             Followers : {props.user.followers}
//           </div>
//           <div className="badge badge-success">
//             Following : {props.user.followeing}
//           </div>
//           <div className="badge badge-light">
//             Public Repos : {props.user.public_repos}
//           </div>
//           <div className="badge badge-danger">
//             Public Gists : {props.user.public_gists}
//           </div>
//         </div>
//         <Repos repos={props.repos} />
//       </div>
// };

export default User;
