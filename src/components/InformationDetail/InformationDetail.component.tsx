import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

import styles from "./InformationDetail.component.styles";
import { Props } from "./InformationDetail.component.types";

const InformationDetail = ({header, content}: Props)=>{
  return(
    <View>
      <Text style={styles.header}>{header}</Text>
      <Text>{content}</Text>
    </View>
  )
}

export default InformationDetail;