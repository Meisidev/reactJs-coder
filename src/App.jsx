import Footer from "./Components/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
//import ItemListContainer from "./Components/ItemListContainer";
import MainPart from "./Components/MainPart";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <MainPart />
      <ItemDetailContainer />
      <Footer />
    </div>
  )
}

export default App;
