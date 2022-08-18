import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Edit from "../Edit";

const mockStore = configureMockStore();
const store = mockStore({});

test("snapshot Edit renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Edit />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
