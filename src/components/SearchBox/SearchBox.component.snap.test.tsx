import { assertSnapshots } from "../../../test";
import SearchBox from ".";
import { Props } from "./SearchBox.component.types";

describe('SearchBoxSnapshot', () => {

  const mockProps:Props = {
    onChangeSort:()=>{},
    onChangeSearch:()=>{},
    sortLabel: 'label',
    options: [{
      label: 'label',
      value: 'value'
    }]
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render search input'
    },
    {
      props: {...mockProps, placeholder: 'placeholder'},
      desc: 'should render search input with placeholder'
    },
  ];

  assertSnapshots(SearchBox, configs);
});
