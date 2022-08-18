import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import TableRow from "../TableRow";

const mockStore = configureMockStore();
const store = mockStore({});

const tableRow = {
  title: "sharif 954t5",
  description: "This is a jkn5lkt text fosdmg, gmrat",
  id: 8422553,
  date: "17-08-2022",
};

test("snapshot SearchField renders with empty", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <TableRow />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot SearchField renders with empty props", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <TableRow key={""} e={{}} />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot SearchField renders with props", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <TableRow key={"keyid"} e={tableRow} />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
