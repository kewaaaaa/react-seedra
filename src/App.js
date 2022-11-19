import Javohir from "./Javohir/javohir";
import Najmiddin from "./Najmiddin/Najmiddin";
import Islom from "./Islom/Islom";
import Elyor from "./Elyor/elyor";
import Nodir from "./Nodir/ownComponent";
import Something from "./Nozimbek/Something";
import Footer from "./IslombekNosirov/footer";
import Bunyodbek from "./Bunyodbek/bunyodbek";
import { Provider } from "react-redux";
import { store } from "./Gofur/store/store";
import { GofursComponent } from "./Gofur/App";

function App() {
  return (
    <>
      <Elyor />
      <Javohir />
      <Najmiddin />
      <Islom name="Islom" job="Developer" />
      <Nodir name="Nodir" title="Web Dev" />
      <Something />
      <Footer />
      <Bunyodbek />
      <Provider store={store}>
        <GofursComponent />
      </Provider>
    </>
  );
}

export default App;
