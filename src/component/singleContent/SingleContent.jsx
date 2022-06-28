import React from "react";
import { img_300, unavailable } from "../../config";
import "./singlecontent.css";
import Badge from "@mui/material/Badge";

const SingleContent = ({ id, poster, title, date, media_type, rating }) => {
  return (
    <>
      <div className="media">
        <Badge
          badgeContent={rating}
          color={rating > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span className="subTitle">{date}</span>
      </div>
    </>
  );
};

export { SingleContent };
