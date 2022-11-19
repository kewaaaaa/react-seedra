import Javohir from "./Javohir/javohir";
import Najmiddin from "./Najmiddin/Najmiddin";
import Islom from "./Islom/Islom";
import Elyor from "./Elyor/elyor";
import Nodir from "./Nodir/ownComponent";
import Something from "./Nozimbek/Something";
import Footer from "./IslombekNosirov/footer";
import Fazliddin from "./fazliddin/button";
import { Provider } from "react-redux";
import { store } from "./Gofur/store/store";
import { GofursComponent } from "./Gofur/App";

function App() {
  return (
    <>
      <Fazliddin text="nmadr" />
      <Elyor />
      <Javohir />
      <Najmiddin />
      <Islom name="Islom" job="Developer" />
      <Nodir name="Nodir" title="Web Dev" />
      <Something />
      <Footer />
      <Provider store={store}>
        <GofursComponent />
      </Provider>
    </>
  );
}

export default App;
