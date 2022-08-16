import React, { useEffect } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { Transaction } from "../../../index.types";
import api from "../../api";
import TransactionCard from "../../components/TransactionCard";
import useTransactions from "../../hooks/useTransactions/useTransactions.hooks";
import { SetToTransactionList } from "../../hooks/useTransactions/useTransactions.hooks.types";
import styles from "./TransactionList.component.styles";

const _onPressTransactionCard = ()=>{

}

const _getListTransaction = async ()=>{
  const data = await api.recruitmentTest.getListTransaction();

  return data;
}

const _asyncInnit = async (setToTransactionList: SetToTransactionList)=>{
  const transactions = await _getListTransaction()

  setToTransactionList(transactions)
}

const _renderTransactionList:ListRenderItem<Transaction> = ({item})=>(
  <TransactionCard transaction={item} key={item.id} onPress={_onPressTransactionCard}/>
)

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
      <FlatList
        data={transactionList}
        renderItem={_renderTransactionList}
      />
    </View>
  );
}

export default TransactionList;