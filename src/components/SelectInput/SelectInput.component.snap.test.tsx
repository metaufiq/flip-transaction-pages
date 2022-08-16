import { assertSnapshots } from "../../../test";
import SelectInput from ".";
import { Props } from "./SelectInput.component.types";

jest.mock('react', ()=>({
  ...jest.requireActual('react'),
  useState: jest.fn(()=>[false, jest.fn()])
}))

describe('SelectInputSnapshot', () => {

  const mockProps:Props = {
    onChange:()=>{},
    label: 'label',
    options: [{
      label: 'label',
      value: 'value'
    }]
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render select input'
    }
  ];

  assertSnapshots(SelectInput, configs);
});
