import  { configure, ShallowWrapper, shallow } from "enzyme";

import LoginForm from "./loginForm";

const wrapper = (): ShallowWrapper => {
    return shallow(<LoginForm/>)
}
// describe("LoginForm component", () => {
//     it("should render without errors", () => {
//         expect(wrapper.length).toBeTruthy()
//     })
// })