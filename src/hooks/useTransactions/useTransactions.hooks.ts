import { useEffect, useState } from "react";

import { TransactionsList, TransactionsObject } from "../../../index.types";

const useTransactions = ()=>{
  const [objectTransactions, setObjectTransactions] = useState<TransactionsObject>({});
  const [transactions, setTransactions] = useState<TransactionsList>([]);

  useEffect(()=>{
    setTransactions(Object.keys(objectTransactions).map(key=> objectTransactions[key]))
  }
  ,[objectTransactions])

  return [transactions, setObjectTransactions] as const
}

export default useTransactions;