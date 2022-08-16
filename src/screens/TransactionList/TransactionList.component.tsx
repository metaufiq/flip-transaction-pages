import React, { useEffect } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { Transaction } from "../../../index.types";
import api from "../../api";
import TransactionCard from "../../components/TransactionCard";
import useTransactions from "../../hooks/useTransactions/useTransactions.hooks";
import { SetToTransactionList } from "../../hooks/useTransactions/useTransactions.hooks.types";
import styles from "./TransactionList.component.styles";
import { Props } from "./TransactionList.component.types";

const _onPressTransactionCard = (props:Props, transaction: Transaction)=>()=>{
  props.navigation.push('TransactionDetail', {transaction})
}

const _getListTransaction = async ()=>{
  const data = await api.recruitmentTest.getListTransaction();

  return data;
}

const _asyncInnit = async (setToTransactionList: SetToTransactionList)=>{
  const transactions = await _getListTransaction()

  setToTransactionList(transactions)
}

const _renderTransactionList:(props:Props)=>ListRenderItem<Transaction> = (props:Props) =>({item})=>(
  <TransactionCard transaction={item} key={item.id} onPress={_onPressTransactionCard(props, item)}/>
)

const useInnit = (setToTransactionList: SetToTransactionList)=>{
  useEffect(()=>{
    _asyncInnit(setToTransactionList)
  }, []);
}

const TransactionList = (props: Props) =>{
  const [transactionList, setToTransactionList] = useTransactions();
  
  useInnit(setToTransactionList)

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionList}
        renderItem={_renderTransactionList(props)}
      />
    </View>
  );
}

export default TransactionList;