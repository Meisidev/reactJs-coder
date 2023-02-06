import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import MainPart from "./Components/MainPart";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting = {'Descuentos exclusivos hasta fin de mes!'}/>
      <MainPart />
      <Footer />
    </div>
  )
}

export default App;
