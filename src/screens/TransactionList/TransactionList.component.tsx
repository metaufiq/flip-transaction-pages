import React, { useEffect } from "react";
import { Text, View } from "react-native";
import api from "../../api";
import styles from "./TransactionList.component.styles";

const _getListTransaction = async ()=>{
  await api.recruitmentTest.getListTransaction();
}

const TransactionList = () =>{
  useEffect(()=>{
    _getListTransaction()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Transaction List Screen</Text>
    </View>
  );
}

export default TransactionList;