import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './StudentCard/Student.jsx';
import Greeting from './conditional-rendering/Greeting.jsx';

function App() {
  return (
    <>
      <Greeting isLoggedIn={true} />
      <Card />
      <Button />
      <Card />
      <Card />

      {/* 
      props = read only properties that are shared between components.
      A parent component can send data to a child component
      <Component key-value />
      */}

      <Student name="Ariz" age={1.25} isStudent={false} />
      <Student name="Farhan" age={2} isStudent={false} />
      <Student name="Imtinan" age={5} isStudent={true} />
      <Student />

    </>
  );
}
export default App