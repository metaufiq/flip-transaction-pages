import React, { Fragment, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

import styles from "./SelectInput.component.styles";
import { Props, SetShowModal } from "./SelectInput.component.types";

const _onShowModal = (setShowModal:SetShowModal)=>()=>{
  setShowModal(true)
}

const _onSelectOption = (props: Props, value:string, setShowModal:SetShowModal)=>()=>{
  props.onChange(value)
  setShowModal(false)
}

const SelectInput = (props: Props)=>{

  const [showModal, setShowModal] = useState(false);
  return(
    <Fragment>
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                {props.options.map(option=>(
                  <Pressable onPress={_onSelectOption(props,option.value, setShowModal)}>
                    <Text>{option.label}</Text>
                  </Pressable>
                ))}
          </View>
        </View>
      </Modal>
      <Pressable onPress={_onShowModal(setShowModal)}>
        <Text style={styles.label}>{props.label}</Text>
      </Pressable>
    </Fragment>
  )
}

export default SelectInput;