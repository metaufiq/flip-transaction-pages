import React, { useState } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { Transaction } from "../../../index.types";
import SearchInput from "../../components/SearchInput";
import TransactionCard from "../../components/TransactionCard";
import useTransactions from "../../hooks/useTransactions/useTransactions.hooks";
import { Params as UseTransactionsParams } from "../../hooks/useTransactions/useTransactions.hooks.types";
import useTransactionsQuery from "../../hooks/useTransactionsQuery/useTransactionsQuery.hooks";
import styles from "./TransactionList.component.styles";
import { Props, SetSearchInput } from "./TransactionList.component.types";

const _onPressTransactionCard = (props:Props, transaction: Transaction)=>()=>{
  props.navigation.push('TransactionDetail', {transaction})
}

const _onSearch = (setSearchInput: SetSearchInput)=>(searchInput: string)=>{
  setSearchInput(searchInput)
}

const _renderTransactionList:(props:Props)=>ListRenderItem<Transaction> = (props:Props) =>({item})=>(
  <TransactionCard transaction={item} key={item.id} onPress={_onPressTransactionCard(props, item)}/>
)

const TransactionList = (props: Props) =>{
  const {transactions : queryResult} = useTransactionsQuery();
  const [searchInput, setSearchInput] = useState<string>();

  const useTransactionsParams:UseTransactionsParams = {
    initialValue: queryResult,
    searchInput
  }
  const {transactions} = useTransactions(useTransactionsParams);

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <SearchInput onChange={_onSearch(setSearchInput)} placeholder='Cari nama, bank, atau nominal'/>
      </View>
      
      <FlatList
        data={transactions}
        renderItem={_renderTransactionList(props)}
      />
    </View>
  );
}

export default TransactionList;