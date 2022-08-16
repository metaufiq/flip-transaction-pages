import { TransactionsList, TransactionsObject } from "../../../index.types";

export type SetToTransactionList = React.Dispatch<React.SetStateAction<TransactionsObject>>

export type Params = {
  initialValue: TransactionsList
}