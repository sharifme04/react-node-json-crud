import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Add from "../Add";

const mockStore = configureMockStore();
const store = mockStore({});

test("snapshot form renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Add />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
