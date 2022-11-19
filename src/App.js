import "./App.css";
import Javohir from "./Javohir/javohir";
import Najmiddin from "./Najmiddin/Najmiddin";
import { Provider } from 'react-redux';
import { store } from "./Gofur/store/store";
import { GofursComponent } from "./Gofur/App";

function App() {
  return (
    <>
      <Javohir />
      <Najmiddin />
      <Provider store={store}>
        <GofursComponent/>
      </Provider>
    </>
  );
}

export default App;
