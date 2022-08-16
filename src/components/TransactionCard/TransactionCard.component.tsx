import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

import styles from "./TransactionCard.component.styles";
import { Props } from "./TransactionCard.component.types";

const TransactionCard = ({transaction, onPress}: Props)=>{
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text>{transaction.sender_bank} → {transaction.beneficiary_bank}</Text>
          <Text>{transaction.beneficiary_name}</Text>
          <Text>{transaction.amount+transaction.fee} • {transaction.completed_at}</Text>
        </View>
        <View>
          <Text>{transaction.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TransactionCard;