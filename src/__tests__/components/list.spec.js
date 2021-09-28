/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import List from "../../components/List/List";
import { getQueriesForElement } from "@testing-library/dom";

function render(ui) {
  const container = document.createElement("div");
  ReactDOM.render(ui, container);
  const queries = getQueriesForElement(container);
  return { container, ...queries };
}

test("should render list components", () => {
  // Arrange
  const data = {
    results: [
      {
        id: 1,
        model: "500",
        make: "Fiat",
        capacity: 4,
        type: "micro",
        price: 70,
        image_url: "www.image1.com",
      },
      {
        id: 2,
        model: "Twingo",
        make: "Renault",
        capacity: 4,
        type: "micro",
        price: 55,
        image_url: "www.image2.com",
      },
    ],
    total: 2,
  };

  // Act
  const { getByLabelText, getByText } = render(<List data={data} />);

  // Assert

  for (const car of data.results) {
    const makeAndModel = getByText(`${car.make} ${car.model}`);
    expect(makeAndModel).toBeDefined();

    const model = getByText(`${car.make} ${car.model}`);
    expect(model).toBeDefined();

  }
});
