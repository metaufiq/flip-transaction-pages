import React from "react";
import { Text, TextInput, View } from "react-native";

import styles from "./SearchInput.component.styles";
import { Props } from "./SearchInput.component.types";

const SearchInput = ({placeholder, onChange}: Props)=>{
  return(
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  )
}

export default SearchInput;