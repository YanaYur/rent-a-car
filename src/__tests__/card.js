import React from 'react';
import {Card} from '../components/Card/Card';


test("should render card component", () => {
  // Arrange
  const div = document.createElement("div");
  const data = {
    model: "Q6",
    make: "Audi",
    capacity: 5,
    type: "4x4",
    price: 240,
    totalPrice: 2400,
    image_url:
      "https://resources-bucket-aefnmae93.s3.eu-west-3.amazonaws.com/images/cars/4x4_audi.jpg",
  };

  beforeAll(() => server.listen())

  // Act
  ReactDOM.render(<Card data={data} />, div);

  // Assert
  expect(div.querySelector("img"));
});
