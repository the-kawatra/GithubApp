import React from "react";

const RepoItem = (props) => {
  return (
    <div className="card">
      <a href={props.html_url} target="_blank" rel="noreferrer">
        {props.name}
      </a>
    </div>
  );
};

const Repos = (props) => {
  return props.repos.map((repo) => {
    return <RepoItem name={repo.name} html_url={repo.html_url} key={repo.id} />;
  });
};

export default Repos;
