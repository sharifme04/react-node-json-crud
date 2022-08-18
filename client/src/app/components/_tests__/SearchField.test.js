import React from "react";
import renderer from "react-test-renderer";
import SearchField from "../SearchField";

test("snapshot SearchField renders with empty props", () => {
  const component = renderer.create(<SearchField />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot SearchField renders with props", () => {
  const component = renderer.create(
    <SearchField
      value={'value'}
      handleChange={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
