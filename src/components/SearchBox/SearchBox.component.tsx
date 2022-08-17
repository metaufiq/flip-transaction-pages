import React from "react";
import { TextInput, View } from "react-native";
import SelectInput from "../SelectInput";

import styles from "./SearchBox.component.styles";
import { Props } from "./SearchBox.component.types";

const SearchBox = ({placeholder, onChangeSearch, sortLabel, onChangeSort, options}: Props)=>{
  return(
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder}
        onChangeText={onChangeSearch}
      />
      <SelectInput
        label={sortLabel}
        onChange={onChangeSort}
        options={options}
      />
    </View>
  )
}

export default SearchBox;