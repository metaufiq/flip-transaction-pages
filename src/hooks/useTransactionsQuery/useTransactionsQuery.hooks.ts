import { useEffect, useState } from "react";

import { TransactionsList, TransactionsObject } from "../../../index.types";
import api from "../../api";
import { SetToTransactionList } from "./useTransactionsQuery.hooks.types";

const _getListTransaction = async ()=>{
  const data = await api.recruitmentTest.getListTransaction();

  return data;
}

const _asyncInnit = async (setToTransactionList: SetToTransactionList)=>{
  const transactions = await _getListTransaction()

  setToTransactionList(transactions)
}

const useInnit = (setToTransactionList: SetToTransactionList)=>{
  useEffect(()=>{
    _asyncInnit(setToTransactionList)
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