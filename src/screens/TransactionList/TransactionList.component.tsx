import React, { useState } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { Transaction } from "../../../index.types";
import SearchInput from "../../components/SearchInput";
import SelectInput from "../../components/SelectInput";
import { Option } from "../../components/SelectInput/SelectInput.component.types";
import TransactionCard from "../../components/TransactionCard";
import useTransactions from "../../hooks/useTransactions/useTransactions.hooks";
import { Params as UseTransactionsParams, SortCondition } from "../../hooks/useTransactions/useTransactions.hooks.types";
import useTransactionsQuery from "../../hooks/useTransactionsQuery/useTransactionsQuery.hooks";
import styles from "./TransactionList.component.styles";
import { Props, SetSearchInput, SetSortCondition } from "./TransactionList.component.types";

const OPTIONS_SORT:Option[] = [
  {label:'URUTKAN', value: undefined},
  {label:'A-Z', value: 'A-Z'},
  {label:'Z-A', value: 'Z-A'},
  {label:'Tanggal Terbaru', value: 'NEWEST_DATE'},
  {label:'Tanggal Terlama', value: 'OLDEST_DATE'},
]

const _onPressTransactionCard = (props:Props, transaction: Transaction)=>()=>{
  props.navigation.push('TransactionDetail', {transaction})
}

const _onSearch = (setSearchInput: SetSearchInput)=>(searchInput: string)=>{
  setSearchInput(searchInput)
}

const _renderTransactionList:(props:Props)=>ListRenderItem<Transaction> = (props:Props) =>({item})=>(
  <TransactionCard transaction={item} key={item.id} onPress={_onPressTransactionCard(props, item)}/>
)

const _onSelectSortCondition = (setSortCondition: SetSortCondition)=>(value:string)=>{
  console.log({value});
  
  setSortCondition(value as SortCondition)
}

const TransactionList = (props: Props) =>{
  const {transactions : queryResult} = useTransactionsQuery();
  const [sortCondition, setSortCondition] = useState<SortCondition>();
  const [searchInput, setSearchInput] = useState<string>();

  const useTransactionsParams:UseTransactionsParams = {
    initialValue: queryResult,
    searchInput,
    sortCondition
  }
  const {transactions} = useTransactions(useTransactionsParams);

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <SearchInput onChange={_onSearch(setSearchInput)} placeholder='Cari nama, bank, atau nominal'/>
      </View>
        <SelectInput label="URUTKAN" onChange={_onSelectSortCondition(setSortCondition)} options={OPTIONS_SORT} />
      <FlatList
        data={transactions}
        renderItem={_renderTransactionList(props)}
      />
    </View>
  );
}

export default TransactionList;