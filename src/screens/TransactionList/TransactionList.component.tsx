import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { Transaction } from "../../../index.types";
import SearchInput from "../../components/SearchInput";
import TransactionCard from "../../components/TransactionCard";
import useTransactionsQuery from "../../hooks/useTransactionsQuery/useTransactionsQuery.hooks";
import styles from "./TransactionList.component.styles";
import { Props } from "./TransactionList.component.types";

const _onPressTransactionCard = (props:Props, transaction: Transaction)=>()=>{
  props.navigation.push('TransactionDetail', {transaction})
}

const _onSearch = ()=>{}

const _renderTransactionList:(props:Props)=>ListRenderItem<Transaction> = (props:Props) =>({item})=>(
  <TransactionCard transaction={item} key={item.id} onPress={_onPressTransactionCard(props, item)}/>
)

const TransactionList = (props: Props) =>{
  const {transactions} = useTransactionsQuery();

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <SearchInput onChange={_onSearch} placeholder='Cari nama, bank, atau nominal'/>
      </View>
      
      <FlatList
        data={transactions}
        renderItem={_renderTransactionList(props)}
      />
    </View>
  );
}

export default TransactionList;