import PropTypes from 'prop-types'
import Cart from './../Cart/Cart';

const Carts = ({ selectCourse, totalCredit, totalRemaingCredit, totalCoursePrice }) => {
    return (
        <div>
            <div className="md:w-80 bg-white rounded-xl space-y-5 p-6 my-10">
                <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining {totalRemaingCredit} hr</h2>
                <hr className="border-[1px] border-[#1C1B1B33]" />
                <h2 className="text-[#1C1B1B] text-lg font-bold">Course Name</h2>
                <ol className="list-decimal list-inside  text-[#1C1B1B99] text-base font-normal leading-8">
                    {
                        selectCourse.map((item, index) => <Cart key={index} data={item} />)
                    }
                </ol>
                <hr className="border-[1px] border-[#1C1B1B33]" />
                <h2 className="text-[#1C1B1BCC] text-base font-medium">Total Credit Hour : {totalCredit}hr</h2>
                <hr className="border-[1px] border-[#1C1B1B33]" />
                <h2 className="text-[#1C1B1BCC] text-base font-medium">Total Price : {totalCoursePrice} USD</h2>
            </div>
        </div>
    )
}

Carts.propTypes = {
    selectCourse: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalRemaingCredit: PropTypes.number.isRequired,
    totalCoursePrice: PropTypes.number.isRequired
}

export default Carts