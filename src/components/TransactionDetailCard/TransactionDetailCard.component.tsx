import React from "react";
import { Pressable, Text, View } from "react-native";

import { currencyFormatter, dateFormat } from "../../utils/index.utils";
import InformationDetail from "../InformationDetail";
import styles from "./TransactionDetailCard.component.styles";
import { Props } from "./TransactionDetailCard.component.types";

const TransactionDetailCard = ({transaction, onClose}: Props)=>{
  return(
    <View style={styles.container}>
      <View style={styles.idContainer}>
        <Text style={styles.id}>ID TRANSAKSI: #{transaction.id}</Text>
      </View>
      <View style={styles.detailHeaderContainer}>
        <Text style={styles.id}>DETAIL TRANSAKSI</Text>
        <Pressable onPress={onClose}>
         <Text style={styles.closeButton}>Tutup</Text>
        </Pressable>
      </View>
      <View style={styles.bankContainer}>
        <Text style={styles.id}>
          {transaction.sender_bank} → {transaction.beneficiary_bank}
        </Text>
      </View>
      
      <View>
        <View style={styles.rowContainer}>
          <InformationDetail header={transaction.beneficiary_name} content={transaction.account_number}/>
          <InformationDetail header={'NOMINAL'} content={currencyFormatter(transaction.amount)}/>
        </View>
        <View style={styles.rowContainer}>
          <InformationDetail header={'BERITA TRANSFER'} content={transaction.remark}/>
          <InformationDetail header={'KODE UNIK'} content={transaction.unique_code}/>
        </View>
        <View style={styles.rowContainer}>
          <InformationDetail header={'WAKTU DIBUAT'} content={dateFormat(transaction.completed_at)}/>
        </View>
      </View>
    </View>
  )
}

export default TransactionDetailCard;