import Delivery from "./component/Delivery-section/Delivery";
import Delievery_types from "./component/Varianti_dostavki/Varianti-dostavki";
import Change from "./pages/change/change";
import Change from "./pages/change/change";
import ClientSection from "./component/ClientsSections/ClientSectionP";

function App() {
  return (
    <>
      <Delivery />
      <Change />
      <Delievery_types />

      <ClientSection />
      <Change />
    </>
  );
}

export default App;
