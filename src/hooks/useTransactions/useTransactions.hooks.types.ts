import { TransactionsList, Transaction } from "../../../index.types";

export type Params = {
  initialValue: TransactionsList
  searchInput?: string
}

export type FilterKey =  'amount' | 'beneficiary_name' | 'sender_bank' | 'beneficiary_bank';