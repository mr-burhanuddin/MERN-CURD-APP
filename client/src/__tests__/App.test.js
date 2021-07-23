import React from "react";
import App from "../App";
import NavBar from "../components/Navbar/NavBar";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("shows NavBar Component", () => {
  expect(wrapper.find(NavBar).length).toEqual(1);
});
it("shows Home Component", () => {
  expect(wrapper.find(Home).length).toEqual(0);
});
it("shows Auth Component", () => {
  expect(wrapper.find(Auth).length).toEqual(0);
});
