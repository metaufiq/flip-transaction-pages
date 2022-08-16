import { useEffect, useState } from "react";

import { SetTransactionsList, TransactionsList } from "../../../index.types";
import { Params } from "./useTransactions.hooks.types";

const useInnit = (initialValue: Params['initialValue'], setTransactionList: SetTransactionsList)=>{
  useEffect(()=>{
    setTransactionList(initialValue)
  }, [initialValue]);
}

const useTransactions = ({initialValue}: Params)=>{
  const [transactions, setTransactions] = useState<TransactionsList>([]);

  useInnit(initialValue, setTransactions)

  return {transactions}
}

export default useTransactions;