import { useEffect, useState } from "react";

import { SetTransactionsList, Transaction, TransactionsList } from "../../../index.types";
import { FilterKey, Params } from "./useTransactions.hooks.types";


const FILTER_KEYS:FilterKey[] = ['amount', 'beneficiary_name', 'sender_bank', 'beneficiary_bank'];
const useInnit = (initialValue: Params['initialValue'], setTransactionList: SetTransactionsList)=>{
  useEffect(()=>{
    setTransactionList(initialValue)
  }, [initialValue]);
}

const filterByKeys = (searchInput: string)=>(transaction:Transaction) => {
  return FILTER_KEYS.some(key=> {
    let data = transaction[key]
    if (typeof data === 'number') {
      data = data.toString()
    }

    const lowerCaseData = data.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();

    return lowerCaseData.includes(lowerCaseSearchInput)
  })
}

const useUpdateTransaction = ({searchInput, initialValue}: Params, setTransactions: SetTransactionsList)=>{

  useEffect(()=>{
    
    setTransactions(transactions=> {
      if (!searchInput) return initialValue
      return transactions.filter(filterByKeys(searchInput))
    })
  }, [searchInput])
}

const useTransactions = (params: Params)=>{
  const [transactions, setTransactions] = useState<TransactionsList>([]);

  useInnit(params.initialValue, setTransactions)

  useUpdateTransaction(params, setTransactions)

  return {transactions}
}

export default useTransactions;