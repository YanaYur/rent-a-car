import React from "react";
import Card from "../Card/Card";

import "./styles.scss";

const List = ({ data }) => {
  return (
    <div className="list">
      {data &&
        data.results.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
    </div>
  );
};

export default List;
