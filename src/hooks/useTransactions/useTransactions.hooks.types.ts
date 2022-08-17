import { TransactionsList } from "../../../index.types";

export type FilterKey =  'amount' | 'beneficiary_name' | 'sender_bank' | 'beneficiary_bank';
export type SortCondition = 'A-Z' | 'Z-A' | 'NEWEST_DATE' | 'OLDEST_DATE' | undefined;

export type Params = {
  initialValue: TransactionsList
  searchInput?: string,
  sortCondition?: SortCondition
}

