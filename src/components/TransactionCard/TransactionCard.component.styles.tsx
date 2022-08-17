import { StyleSheet } from "react-native";
import { colors, fontSize, fontWeight } from "../../configs/themes";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: colors.primary,
    justifyContent: 'space-between',
    paddingRight: 5,
    paddingLeft: 5,
    paddingVertical: 25,
  },
  bankInformation:{
    fontSize: fontSize.important,
    fontWeight: fontWeight.important
  },
  beneficiaryName:{
    fontWeight: '500'
  },
  transferInformation:{
    fontWeight: '500'
  }
})

export default styles;