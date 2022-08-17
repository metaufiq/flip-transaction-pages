import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TransactionStatus } from "../../../index.types";
import { colors } from "../../configs/themes";
import { currencyFormatter, dateFormat } from "../../utils/index.utils";
import Label from "../Label";
import {Props as LabelProps} from "../Label/Label.component.types";

import styles from "./TransactionCard.component.styles";
import { Props } from "./TransactionCard.component.types";

const _getContainerStyle = (status: TransactionStatus)=>(
  {borderLeftColor: status === "PENDING" ? colors.primary: colors.success}
)

const _getLabelValue = (status: TransactionStatus)=> 
status === 'PENDING' ? 'Pengecekkan' : 'Berhasil'

const _getLabelType = (status: TransactionStatus):LabelProps['type']=>
status === 'PENDING' ? 'PRIMARY' : 'SUCCESS'


const TransactionCard = ({transaction, onPress}: Props)=>{
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, _getContainerStyle(transaction.status)]}>
        <View>
          <Text 
            style={styles.bankInformation}
          >
            {transaction.sender_bank} → {transaction.beneficiary_bank}
          </Text>
          <Text 
            style={styles.beneficiaryName}
          >
            {transaction.beneficiary_name.toUpperCase()}
          </Text>
          <Text 
            style={styles.transferInformation}
          >
            {currencyFormatter(transaction.amount+transaction.fee)} • {dateFormat(transaction.completed_at)}
          </Text>
        </View>
        <Label 
          value={_getLabelValue(transaction.status)} 
          type={_getLabelType(transaction.status)}
        />
      </View>
    </TouchableOpacity>
  )
}

export default TransactionCard;