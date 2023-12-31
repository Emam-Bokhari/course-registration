import { useState } from "react"
import Carts from "./components/Carts/Carts"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [selectCourse, setSelectCourse] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalRemaingCredit, setTotalRemainingCredit] = useState(20)
  const [totalCoursePrice, setTotalCoursePrice] = useState(0)
  const addCourse = (course) => {
    let creditHours = course.credit
    let totalPrice = course.price

    const isIncluded = selectCourse.find(item => item.id === course.id)

    if (isIncluded) {
      return toast.warn("Already included this course")
    }

    selectCourse.forEach(item => {
      creditHours = creditHours + item.credit
    })

    if (creditHours > 20) {
      return toast.warn("You have no credit!")
    }

    const remainingCredit = 20 - creditHours
    setTotalRemainingCredit(remainingCredit)
    setTotalCredit(creditHours)

    selectCourse.forEach(item => {
      totalPrice = totalPrice + item.price
    })
    setTotalCoursePrice(totalPrice)

    const selectNewCourse = [...selectCourse, course]
    setSelectCourse(selectNewCourse)
  }

  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-8 md:px-16  lg:my-10 bg-[#F3F3F3] pb-10">
        <Header />
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <Courses addCourse={addCourse} />
          <ToastContainer />
          <Carts selectCourse={selectCourse} totalCredit={totalCredit} totalRemaingCredit={totalRemaingCredit} totalCoursePrice={totalCoursePrice} />
        </div>
      </section>
    </div>
  )
}
export default App