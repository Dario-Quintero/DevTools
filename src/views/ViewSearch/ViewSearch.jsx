import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Search from "../../Components/Search/Search"


function ViewSearch() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Search />
      <Footer />
    </div>
  )
}

export default ViewSearch