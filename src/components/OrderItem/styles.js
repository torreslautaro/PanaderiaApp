import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : '#fff',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    padding:10,
    borderRadius: 5,
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white'
  }
})

export default styles