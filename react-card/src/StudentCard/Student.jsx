
import styles from './Student.module.css'
import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className={styles.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
// propTypes = a mechanism that ensures that 
// the passed value is of the correct datatype. 
// Such as age:PropTypes.number
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// defaultProps  = default values for props in case they are not passed from the parent Component. 
// Such as name = 'guest'
Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false,
}
export default Student