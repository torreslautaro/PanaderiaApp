import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60,
    marginVertical:10,
    height: 80
  },
  touchableContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'red'
  },
  informationContainer: {
    flex: 1,
    paddingHorizontal:15,
    width: '100%',
    justifyContent: 'space-around'
  },
  detailContainer: {
    flexDirection: 'row',
   justifyContent: 'space-between'
  },
  title : {
    fontSize: 18
  }
})

export default styles