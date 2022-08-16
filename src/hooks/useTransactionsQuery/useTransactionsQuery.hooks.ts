import { useEffect, useState } from "react";

import { TransactionsList, TransactionsObject } from "../../../index.types";
import api from "../../api";
import { SetTransactionsObject } from "./useTransactionsQuery.hooks.types";

const _getListTransaction = async ()=>{
  const data = await api.recruitmentTest.getListTransaction();

  return data;
}

const _asyncInnit = async (setTransactionsObject: SetTransactionsObject)=>{
  const transactions = await _getListTransaction()

  setTransactionsObject(transactions)
}
const useInnit = (setTransactionsObject: SetTransactionsObject)=>{
  useEffect(()=>{
    _asyncInnit(setTransactionsObject)
  }, []);
}


const useTransactionsQuery = () => {
  const [objectTransactions, setObjectTransactions] = useState<TransactionsObject>({});
  const [transactions, setTransactions] = useState<TransactionsList>([]);

  useEffect(()=>{
    setTransactions(Object.keys(objectTransactions).map(key=> objectTransactions[key]))
  }
  ,[objectTransactions])

  useInnit(setObjectTransactions)

  return {transactions}
}

export default useTransactionsQuery;