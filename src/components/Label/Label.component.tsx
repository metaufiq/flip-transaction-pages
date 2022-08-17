import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { colors } from "../../configs/themes";
import styles from "./Label.component.styles";

import { Props, Type } from "./Label.component.types";

const _getBorderColor = (type: Type):ViewStyle['borderColor']=>{
  switch (type) {
    case 'PRIMARY':
      return colors.primary
    case 'SUCCESS':
      return colors.success
    default:
      return colors.primary
  }
}

const _getBackgroundColor = (type: Type):ViewStyle['borderColor']=>{
  switch (type) {
    case 'PRIMARY':
      return 'white'
    case 'SUCCESS':
      return colors.success
    default:
      return 'white'
  }
}

const _getTextColor = (type: Type):TextStyle['color']=>{
  switch (type) {
    case 'PRIMARY':
      return 'black'
    case 'SUCCESS':
      return 'white'
    default:
      return 'black'
  }
}

const _getContainerStyle = (type: Type)=>(
  {
    borderColor: _getBorderColor(type),
    backgroundColor: _getBackgroundColor(type)
  }
)

const _getValueStyle = (type: Type)=>(
  {
    color: _getTextColor(type)
  }
)

const Label = ({type, value}: Props)=>{
  return(
    <View style={[styles.container, _getContainerStyle(type)]}>
      <Text style={[styles.value, _getValueStyle(type)]}>{value}</Text>
    </View>
  )
}

export default Label;