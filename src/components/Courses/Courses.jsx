import { useEffect, useState } from "react"
import Course from "../Course/Course"
import PropTypes from 'prop-types'

const Courses = ({addCourse}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("courseData.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])



    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:my-10">
            {
                courses.map(item => <Course key={item.id} data={item} addCourse={addCourse}/>)
            }
            </div>
        </div>
    )
}

    Courses.propTypes={
        addCourse:PropTypes.func.isRequired
    }

export default Courses