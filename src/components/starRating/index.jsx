import React from "react";
import classNames from "classnames";
import "./styles.scss";

const StarRating = ({ rate, count, title }) => {
  const ranting = new Array(5).fill(0);

  return (
    <div className="star-rating">
      {
        ranting.map((_, index) => (
          <span
            key={index}
            className={
              classNames(
                "star-rating--icon",
                { "on": index <= rate },
                { "off": index > rate }
              )
            }
          >
            &#9733;
          </span>
        ))
      }
      <span className="star-rating__count mobile">{count}</span>
    </div>
  );
};

export default StarRating;
