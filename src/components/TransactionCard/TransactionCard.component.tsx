import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TransactionStatus } from "../../../index.types";
import { colors } from "../../configs/themes";
import { currencyFormatter, dateFormat } from "../../utils/index.utils";

import styles from "./TransactionCard.component.styles";
import { Props } from "./TransactionCard.component.types";

const _getContainerStyle = (status: TransactionStatus)=>(
  {borderLeftColor: status === "PENDING" ? colors.primary: colors.success}
  )

const TransactionCard = ({transaction, onPress}: Props)=>{
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, _getContainerStyle(transaction.status)]}>
        <View>
          <Text style={styles.bankInformation}>{transaction.sender_bank} → {transaction.beneficiary_bank}</Text>
          <Text style={styles.beneficiaryName}>{transaction.beneficiary_name.toUpperCase()}</Text>
          <Text style={styles.transferInformation}>{currencyFormatter(transaction.amount+transaction.fee)} • {dateFormat(transaction.completed_at)}</Text>
        </View>
        <View>
          <Text>{transaction.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TransactionCard;