import React from "react";
import githubData from "../../assets/github.json";
import MacWindow from "/src/components/windows/MacWindow";
import "./github.scss";

// eslint-disable-next-line react-refresh/only-export-components
const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="url">
        <a href={data.demoLink}>Repository</a>
        {data.demoLink && <a href={data.repoLink}>Live Demo</a>}
      </div>
    </div>
  );
};

const github = () => {
  return (
    <div>
      <MacWindow>
        <div className="cards">
          {githubData.map((project) => {
            return <GitCard data={project} />;
          })}
        </div>
      </MacWindow>
    </div>
  );
};

export default github;
