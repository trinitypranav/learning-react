import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantDetails from "../RestaurantDetails";
import MockData from "../../utils/mocks/singleDummyRestaurantData.json";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () => {
    return render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantDetails />
          <Cart />
        </Provider>
      </StaticRouter>
    );
  });
  const someAccordian = screen.getByText("Desserts");
  //   console.log(someAccordian);
  fireEvent.click(someAccordian);
  const menuItems = screen.getAllByTestId("menuItem");
  expect(menuItems.length).toBe(12);

  const addBtns = screen.getAllByRole("button", { name: "＋" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("1 item(s)")).toBeInTheDocument();

  let cartItems = screen.getAllByTestId("cartItem");
  expect(cartItems.length).toBe(1);

  const removeBtns = screen.getAllByText("Remove");
  fireEvent.click(removeBtns[0]);
  expect(screen.getByText("0 item(s)")).toBeInTheDocument();
});
