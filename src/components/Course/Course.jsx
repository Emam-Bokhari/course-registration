import { BsBook } from 'react-icons/bs'
import { FiDollarSign } from 'react-icons/fi'
import PropTypes from 'prop-types'

const Course = ({ data, addCourse }) => {
    const { course_name, img, details, price, credit } = data
    const handleSeleceCourse = () => {
        addCourse(data)
    }

    return (
        <div>

            <div className="p-4 space-y-2 rounded-xl bg-white">
                <img className="w-full" src={img} />
                <h2 className="text-[#1C1B1B] font-semibold text-lg h-16">{course_name}</h2>
                <p className="text-[#1C1B1B99] text-sm font-normal  h-24">{details}</p>
                <div className="flex justify-between">
                    <div className="flex items-center text-lg md:text-xl">
                        <FiDollarSign />
                        <p className="text-[#1C1B1B99] text-base font-medium"> Price: {price}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BsBook className="text-lg md:text-xl" />
                        <p className="text-[#1C1B1B99] text-base font-medium"> Credit: {credit}hr</p>
                    </div>
                </div>
                <button onClick={handleSeleceCourse} className="bg-[#2F80ED] rounded-lg w-full h-10 font-semibold text-white text-lg">Select</button>
            </div>

        </div>
    )
}

Course.propTypes = {
    data: PropTypes.object.isRequired,
    addCourse: PropTypes.func.isRequired
}

export default Course