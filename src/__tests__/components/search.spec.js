/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { toHaveAttribute } from "@testing-library/jest-dom";
import { getQueriesForElement, queries } from "@testing-library/dom";
import Search from "../../components/Search/Search";

function render(ui) {
  const container = document.createElement("div");
  ReactDOM.render(ui, container);
  const queries = getQueriesForElement(container);
  return { container, ...queries };
}

test("should render search component", () => {
  // Arrange
  const onSubmit = () => {};

  const params = {
    from: new Date(),
    to: new Date(),
    location: { label: "location", value: "bcn" },
  };

  // Act
  const { getByLabelText, getByText } = render(
    <Search params={params} onSubmit={onSubmit} />
  );

  // Assert
  const textInput = getByLabelText(/choose your city/i);
  expect(textInput).toHaveAttribute("type", "text");

  const button = getByText("Search");
  expect(button).toHaveAttribute("type", "button");
});
