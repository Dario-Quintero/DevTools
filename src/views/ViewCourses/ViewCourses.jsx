import Courses from "../../Components/Courses/Courses"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ViewCourses() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Courses />
      <Footer />
    </div>
  )
}

export default ViewCourses