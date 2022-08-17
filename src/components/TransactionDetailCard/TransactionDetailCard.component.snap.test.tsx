import { assertSnapshots } from "../../../test";
import TransactionDetailCard from ".";
import { Props } from "./TransactionDetailCard.component.types";
import { Transaction } from "../../../index.types";

describe('TransactionDetailCardSnapshot', () => {
  const mockSuccessTransaction: Transaction = {
    account_number: 'account number',
    amount: 10000,
    beneficiary_bank: 'BENEF Bank',
    beneficiary_name: 'BENEF Name',
    completed_at: '07-07-2020',
    created_at: '07-07-2020',
    fee: 1000,
    id: '1231',
    remark: 'remark',
    sender_bank: 'SENDER Bank',
    status: 'SUCCESS',
    unique_code: 124
  };

  const mockPendingTransaction: Transaction = {
    account_number: 'account number',
    amount: 10000,
    beneficiary_bank: 'BENEF Bank',
    beneficiary_name: 'BENEF Name',
    completed_at: '07-07-2020',
    created_at: '07-07-2020',
    fee: 1000,
    id: '1231',
    remark: 'remark',
    sender_bank: 'SENDER Bank',
    status: 'PENDING',
    unique_code: 124
  };

  const mockProps:Props = {
    transaction: mockSuccessTransaction,
    onClose: ()=>{}
  };

  const configs = [
    {
      props: mockProps,
      desc: 'should render success transaction card'
    },
    {
      props: {...mockProps, transaction: mockPendingTransaction},
      desc: 'should render pending transaction card'
    }
  ];

  assertSnapshots(TransactionDetailCard, configs);
});
