import React from "react";
import { shallow } from "enzyme";
import Ticket from "./Ticket";

it("should render button click", () => {
  const wrapper = shallow(<Ticket />);
  const total1 = wrapper.find("h2.total").text();

  expect(total1).toBe("0");

  const button = wrapper.find("button");
  button.simulate("click");
  const total2 = wrapper.find("h2.total").text();
  expect(total2).toBe("1");

  //   expect(result).toBe("Customer Information: 'hu6F6hcvxjs@'");
});

it("should display the title in h2", () => {
  const wrapper = shallow(<Ticket name={"Whattup Nigga!"} />);
  const title = wrapper.find("h2.title").text();
  expect(title).toBe("Whattup Nigga!");
});
