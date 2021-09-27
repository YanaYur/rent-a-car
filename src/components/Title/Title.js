import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from '@mui/icons-material/StarHalf';

import "./styles.scss";

export default function Title() {
  return (
    <div className="title">
      <h1 className="title-primary">Greate service, best price and total cover insurance included</h1>
      <h3 className="title-secondary">Find your car in a minute</h3>
      <div className="title-ranking">
      <h4>Rating:  </h4>
      <StarIcon/>
      <StarIcon/>
      <StarIcon/>
      <StarIcon/>
      <StarHalfIcon/>
      <h4> by 58985 clients</h4>
      </div>
    </div>
  );
}
