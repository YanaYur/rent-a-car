/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import Card from "../../components/Card/Card";
import { getQueriesForElement } from "@testing-library/dom";

function render(ui) {
  const container = document.createElement("div");
  ReactDOM.render(ui, container);
  const queries = getQueriesForElement(container);
  return { container, ...queries };
}

test("should render card component", () => {
  // Arrange
  const data = {
    model: "Q6",
    make: "Audi",
    capacity: 5,
    type: "4x4",
    price: 240,
    totalPrice: 2400,
    image_url: "www.image.com",
  };

  // Act
  const { getByLabelText, getByText } = render(<Card data={data} />);

  // Assert
  const makeAndModel = getByText(`${data.make} ${data.model}`);
  expect(makeAndModel).toBeDefined();

  const model = getByText(`${data.make} ${data.model}`);
  expect(model).toBeDefined();

  const capacity = getByText(data.capacity);
  expect(capacity).toBeDefined();
});
