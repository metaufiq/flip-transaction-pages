import { assertSnapshots } from "../../../test";
import InformationDetail from ".";
import { Props } from "./InformationDetail.component.types";
import { Transaction } from "../../../index.types";

describe('InformationDetailSnapshot', () => {


  const mockProps:Props = {
    header: 'header',
    content: 'content'
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render information detail'
    },
  ];

  assertSnapshots(InformationDetail, configs);
});
