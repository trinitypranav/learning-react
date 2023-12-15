import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

test("should load logo", () => {
  render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );

  expect(screen.getByAltText("Eat Villa App Logo")).toBeInTheDocument();
});

test("should toggle on Login and Logout button click", () => {
  render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );

  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Login" }));
  expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Logout" }));
});
