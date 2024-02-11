import PropTypes from 'prop-types'
import styles from './Greeting.module.css'
function Greeting(props) {

    const greeting = <h2 className={styles.welcomeMsg}>Welcome! {props.username}. You are logged in.</h2>;
    const login = <h2 className={styles.loginMsg}>Please! Log in to continue</h2>;
    // if (props.isLoggedIn) {
    //     return greeting;
    // }
    // return login;
    return props.isLoggedIn ? greeting : login;
}
Greeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

Greeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default Greeting