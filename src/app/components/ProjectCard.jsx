import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div
      className="h-52 md:h-72"
      style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
    ></div>
  );
};

export default ProjectCard;
