import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import data from "../../utils/allDummyRestaurants.json";
import { act } from "react-dom/test-utils";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    },
  });
});

test("should render body component", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let body = screen.getByTestId("body");

  expect(body).toBeInTheDocument();
});

test("should render Search feature", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let searchInput = screen.getByRole("textbox");
  let searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchInput).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();
});

test("should render Filter feature", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let filter4kBtn = screen.getByRole("button", { name: "Filter 4+ Rating" });
  let reviews10kBtn = screen.getByRole("button", { name: "10K+ Reviews" });
  let nearestBtn = screen.getByRole("button", { name: "Nearest" });

  expect(filter4kBtn).toBeInTheDocument();
  expect(reviews10kBtn).toBeInTheDocument();
  expect(nearestBtn).toBeInTheDocument();
});

test("should test search feature for 'pizza' input value", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let searchInput = screen.getByRole("textbox");
  let searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  let cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(2);
});

test("should test search feature for '' input value", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let searchInput = screen.getByRole("textbox");
  let searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "" } });
  fireEvent.click(searchBtn);
  let cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(20);
});

test("should test filter feature 4+ rating", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", { name: "Filter 4+ Rating" });
  fireEvent.click(topRatedBtn);
  expect(screen.getAllByTestId("card").length).toBe(13);
  fireEvent.click(topRatedBtn);
  expect(screen.getAllByTestId("card").length).toBe(20);
});

test("should test filter feature 10k reviews", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(20);
  const topReviewsBtn = screen.getByRole("button", { name: "10K+ Reviews" });
  fireEvent.click(topReviewsBtn);
  let cardsAfter = screen.getAllByTestId("card");
  expect(cardsAfter.length).toBe(9);
  fireEvent.click(topReviewsBtn);
  expect(screen.getAllByTestId("card").length).toBe(20);
});

test("should test filter feature nearest", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <Body />
      </StaticRouter>
    );
  });

  let cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(20);
  const nearestBtn = screen.getByRole("button", { name: "Nearest" });
  fireEvent.click(nearestBtn);
  let cardsAfter = screen.getAllByTestId("card");
  expect(cardsAfter.length).toBe(9);
  fireEvent.click(nearestBtn);
  expect(screen.getAllByTestId("card").length).toBe(20);
});
