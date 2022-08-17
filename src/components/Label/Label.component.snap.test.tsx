import { assertSnapshots } from "../../../test";
import Label from ".";
import { Props } from "./Label.component.types";

describe('LabelSnapshot', () => {

  const mockProps:Props = {
    type: 'PRIMARY',
    value: 'value'
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render primary label'
    },
    {
      props: {...mockProps, type: 'SUCCESS'},
      desc: 'should render success label'
    },
  ];

  assertSnapshots(Label, configs);
});
