import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-8 md:px-16  my-10 bg-[#F3F3F3] pb-10">
        <Header />
        <Courses />
      </section>
    </div>
  )
}
export default App