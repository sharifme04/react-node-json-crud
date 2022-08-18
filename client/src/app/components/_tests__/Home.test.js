import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";

const data = [
  {
    title: "some company name",
    description: "there is a description of the company",
    id: 767658,
    date: "18-08-2022",
  },
  {
    title: "sharif ",
    description: "This is a sharif text fosdmg, gmrat77777",
    date: "17-08-2022",
    id: 842223,
  },
  {
    title: "sharif 954t5",
    description: "This is a jkn5lkt text fosdmg, gmrat",
    id: 8422553,
    date: "17-08-2022",
  },
];

test("snapshot renders without props", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot renders with props without data", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Home
        todoList={[]}
        isLoading={true}
        handleChange={() => {}}
        value={"title"}
      />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot renders with props and data", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Home
        todoList={data}
        isLoading={false}
        handleChange={() => {}}
        value={"title"}
      />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
