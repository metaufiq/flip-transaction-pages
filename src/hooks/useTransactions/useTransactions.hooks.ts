import { useEffect, useState } from "react";

import { SetTransactionsList, Transaction, TransactionsList } from "../../../index.types";
import { FilterKey, Params, SortCondition } from "./useTransactions.hooks.types";


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

const useSearch = ({searchInput, initialValue}: Params, setTransactions: SetTransactionsList)=>{

  useEffect(()=>{
    
    setTransactions(transactions=> {
      if (!searchInput) return initialValue
      return transactions.filter(filterByKeys(searchInput))
    })
  }, [searchInput])
}

const _sortByCondition = (sortCondition:SortCondition)=> (current: Transaction, next: Transaction)=>{
  if (!sortCondition) return 1

  switch (sortCondition) {
    case 'A-Z':
      return next.beneficiary_name.localeCompare(current.beneficiary_name);

    case 'Z-A':
      return current.beneficiary_name.localeCompare(next.beneficiary_name);
    
    case 'NEWEST_DATE':
      return new Date(next.completed_at).getTime() - new Date(current.completed_at).getTime();
    
    case 'OLDEST_DATE':
      return new Date(current.completed_at).getTime() - new Date(next.completed_at).getTime();

    default:
      return 1;
  }
}

const useSort = ({sortCondition, initialValue}: Params, setTransactions: SetTransactionsList)=>{

  useEffect(()=>{
    
    setTransactions(initialValue.sort(_sortByCondition(sortCondition)))
  }, [sortCondition])
}

const useTransactions = (params: Params)=>{
  const [transactions, setTransactions] = useState<TransactionsList>([]);

  useInnit(params.initialValue, setTransactions)
  useSearch(params, setTransactions)
  useSort(params, setTransactions)

  return {transactions}
}

export default useTransactions;