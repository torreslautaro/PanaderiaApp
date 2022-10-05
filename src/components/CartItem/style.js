import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    margin:10,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  containerDetails:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  text: {
    fontSize: 16
  },
  price: {
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'red'
  },
  buttonText:{
    color: 'white'
  }
})

export default styles