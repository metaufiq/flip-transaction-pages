import React from "react";
import { Text, View } from "react-native";

import InformationDetail from "../InformationDetail";
import styles from "./TransactionDetailCard.component.styles";
import { Props } from "./TransactionDetailCard.component.types";

const TransactionDetailCard = ({transaction}: Props)=>{
  return(
    <View style={styles.container}>
      <Text>ID TRANSAKSI: #{transaction.id}</Text>
      <Text>DETAIL TRANSAKSI</Text>
      <Text>{transaction.sender_bank} → {transaction.beneficiary_bank}</Text>
      <View>
        <InformationDetail header={transaction.beneficiary_name} content={transaction.account_number}/>
        <InformationDetail header={'NOMINAL'} content={transaction.amount}/>
        <InformationDetail header={'BERITA TRANSFER'} content={transaction.remark}/>
        <InformationDetail header={'KODE UNIK'} content={transaction.unique_code}/>
        <InformationDetail header={'WAKTU DIBUAT'} content={transaction.completed_at}/>
      </View>
      <View>
        <Text>{transaction.status}</Text>
      </View>
    </View>
  )
}

export default TransactionDetailCard;