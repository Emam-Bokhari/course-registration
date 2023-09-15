import PropTypes from 'prop-types'

const Cart =({data})=>{
    const {course_name}=data
    return (
        <div>
            <li>{course_name}</li>
        </div>
    )
}

    Cart.propTypes={
        data:PropTypes.object.isRequired
    }

export default Cart