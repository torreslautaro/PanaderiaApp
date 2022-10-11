import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import Store from './src/store';

export default function App() {
  return (
    <Provider store={Store} ><AppNavigator /></Provider>
  );
}


