import PropTypes from 'prop-types'

const Course=({data})=>{
    
    const {course_name,img,details,price,credit}=data
    return (
        <div>
            
            <div className="p-4 space-y-2 rounded-xl bg-white">
                <img className="w-full" src={img} />
                <h2 className="text-[#1C1B1B] font-semibold text-lg h-16">{course_name}</h2>
                <p className="text-[#1C1B1B99] text-sm font-normal  h-24">{details}</p>
               <div className="flex justify-between">
               <p className="text-[#1C1B1B99] text-base font-medium">$ Price: {price}</p>
                <p className="text-[#1C1B1B99] text-base font-medium">Credit: {credit}hr</p>
               </div>
                <button className="bg-[#2F80ED] rounded-lg w-full h-10 font-semibold text-white text-lg">Select</button>
            </div>
            
        </div>
    )
}

    Course.propTypes={
        data:PropTypes.object.isRequired
    }

export default Course