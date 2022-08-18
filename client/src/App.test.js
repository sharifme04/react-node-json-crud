// import { render,fireEvent, screen } from '@testing-library/react';
//  import userEvent from '@testing-library/user-event'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter,Route, Routes} from 'react-router-dom'
import renderer from "react-test-renderer";
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({})

test("snapshot data renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App  />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot renders when navigate add route", () => {
  let testHistory, testLocation;   // eslint-disable-line no-unused-vars
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/todo/addnew"]}>
        <App  />
        <Routes>
        <Route 
             path="*"
             render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
              return null;
            }} />
            </Routes>
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot renders when navigate edit route", () => {
  let testHistory, testLocation;   // eslint-disable-line no-unused-vars
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/todo/edit/478951"]}>
        <App  />
        <Routes>
        <Route 
             path="*"
             render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
              return null;
            }} />
            </Routes>
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});