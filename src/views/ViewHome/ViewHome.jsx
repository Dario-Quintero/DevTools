import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Body from "../../Components/Body/Body";
import Frontend from "../../Components/Frontend/Frontend";

function ViewHome() {
  return (
    <>
      <Navbar />
      <Body />
      {/* <Articles /> */}
      <Frontend />
      <Footer />
    </>
  );
}

export default ViewHome;
