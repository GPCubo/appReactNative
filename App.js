import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  );
}
