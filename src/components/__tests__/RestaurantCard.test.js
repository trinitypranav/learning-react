import { render, screen } from "@testing-library/react";
import RestaurantCard, { addOpenLabel } from "../RestaurantCard";
import RestaurantCardMockData from "../../utils/mocks/RestaurantCardMockData.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component successfully", () => {
  render(<RestaurantCard {...RestaurantCardMockData} />);

  let card = screen.getByTestId("card");
  expect(card).toBeInTheDocument();
});

test("should render card image and headings successfully", () => {
  render(<RestaurantCard {...RestaurantCardMockData} />);

  let card = screen.getByRole("img");
  expect(card).toBeInTheDocument();
});

test("should render HOC successfully", () => {
  let OpenRestaurantCard = addOpenLabel(RestaurantCard);
  render(<OpenRestaurantCard {...RestaurantCardMockData} />);

  let labelText = screen.getByText("Open");
  expect(labelText).toBeInTheDocument();
});
