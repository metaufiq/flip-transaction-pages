import { StyleSheet } from "react-native";
import { colors } from "../../configs/themes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  idContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9'
  },
  detailHeaderContainer: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ebebeb',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bankContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20
  },
  rowContainer: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  id:{
    fontSize: 16,
    fontWeight: '600'
  },
  closeButton: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600'
  }
})

export default styles;