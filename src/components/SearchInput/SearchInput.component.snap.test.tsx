import { assertSnapshots } from "../../../test";
import SearchInput from ".";
import { Props } from "./SearchInput.component.types";

describe('SearchInputSnapshot', () => {

  const mockProps:Props = {
    onChange: ()=>{}
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

  assertSnapshots(SearchInput, configs);
});
