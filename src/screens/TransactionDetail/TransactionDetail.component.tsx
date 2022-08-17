import React from "react";
import { View } from "react-native";

import TransactionDetailCard from "../../components/TransactionDetailCard";
import styles from "./TransactionDetail.component.styles";
import { Props } from "./TransactionDetail.component.types";

const TransactionDetail = (props:Props) =>{
  const {transaction} = props.route.params

  return (
    <View style={styles.container}>
      <TransactionDetailCard 
        transaction={transaction} 
        onClose={props.navigation.goBack}
      />
    </View>
  );
}

export default TransactionDetail;