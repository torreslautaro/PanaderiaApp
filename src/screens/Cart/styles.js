import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  confirmContainer:{
    margin:10,
    paddingHorizontal: 40,
    alignItems:'center',
    borderTopWidth: 1,
    borderTopColor: 'gray'
  },
  totalContainer: {
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  button: {
    width:'100%',
    paddingHorizontal:5,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:5,
    backgroundColor: 'green',
  },
  text : {
    fontSize: 20
  },
  confirm: {
    color: 'white',
    fontSize: 18
  }
})

export default styles