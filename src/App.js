
import './App.css';
import Router from "@router";
import {Provider} from 'react-redux'
import store from "@store";

function App() {
  return (
    <Provider className="App" store={store}>
      <Router />
    </Provider>
  );
}

export default App;
