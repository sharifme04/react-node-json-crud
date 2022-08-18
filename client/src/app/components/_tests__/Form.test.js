import React from "react";
import renderer from "react-test-renderer";
import Form from "../Form";

const values = { title: "sharif", description: "some description now" };

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<Form />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with props", () => {
  const component = renderer.create(
    <Form
      btnColor="btn btn-info"
      btnTitle="Update"
      values={values}
      handleChange={() => {}}
      handleSubmit={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
