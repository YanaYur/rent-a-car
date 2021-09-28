import React from "react";
import "./styles.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const favs = ["Fiat"];

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card__favorite">
        {favs.includes(data.make) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
      <div className="card__image">
        <img src={data.image_url} alt={data.make} />
      </div>
      <div className="card__spec">
        <div className="card__spec-title text-section-vertical-separation">
          <h3 className="card__spec-title-text">
            {data.make} {data.model}
          </h3>
        </div>
        <div className="card__spec-details text-section-vertical-separation">
          <p className="card__spec-details-text text-vertical-separation">
            <span className="bold-text">Model:</span> {data.model}
          </p>
          <p className="card__spec-details-text text-vertical-separation">
            <span className="bold-text">Capacity:</span> {data.capacity}
          </p>
          <p className="card__spec-details-text">
            <span className="bold-text">Price/day:</span> €{data.price}
          </p>
        </div>
        <div className="card__spec-price">
          <p className="card__spec-price-text">Total {data.totalPrice},00€ </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
