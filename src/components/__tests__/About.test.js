import { render, screen } from "@testing-library/react";
import About from "../About";
import { Provider } from "react-redux"; //jest doesn't understand Redux
import store from "../../store";
import { StaticRouter } from "react-router-dom/server"; //jest doesn't understand browserRouter
import "@testing-library/jest-dom"; //provides Jest matchers like toBeInTheDocument(), etc

//syntax for tests - render-> query-> assert i.e. expect
describe("About Page Tests", () => {
  beforeEach(() => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <About />
        </Provider>
      </StaticRouter>
    );
  });
  test("Should load the About Component successfully", () => {
    // render(
    //   <StaticRouter>
    //     <Provider store={store}>
    //       <About />
    //     </Provider>
    //   </StaticRouter>
    // );
    const divAbout = screen.getByTestId("about"); //we pass data-testid attribute in jsx
    expect(divAbout).toBeInTheDocument(); //toBeInTheDOM is deprecated
  });

  test("Should render 1 header and 2 paragraphs", () => {
    // render(
    //   <StaticRouter>
    //     <Provider store={store}>
    //       <About />
    //     </Provider>
    //   </StaticRouter>
    // );
    const headers = screen.getAllByRole("heading");
    const link = screen.getAllByRole("link");
    expect(headers.length).toBe(1);
    expect(link.length).toBe(1);
  });
});
