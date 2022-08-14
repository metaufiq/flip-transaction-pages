import React, { useEffect } from "react";
import { Text, View } from "react-native";

import api from "../../api";
import useTransactions from "../../hooks/useTransactions/useTransactions.hooks";
import { SetToTransactionList } from "../../hooks/useTransactions/useTransactions.hooks.types";
import styles from "./TransactionList.component.styles";

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

const TransactionList = () =>{
  const [transactionList, setToTransactionList] = useTransactions();

  useInnit(setToTransactionList)

  return (
    <View style={styles.container}>
      <Text>Transaction List Screen</Text>
      {/* <Text>{JSON.stringify(transactionList)}</Text> */}
    </View>
  );
}

export default TransactionList;