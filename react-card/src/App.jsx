import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './StudentCard/Student.jsx';

function App() {
  return (
    <>
      <Card />
      <Button />
      <Card />
      <Card />
      <Student name="Ariz" age={1.25} isStudent={false} />
      <Student name="Farhan" age={2} isStudent={false} />
      <Student name="Imtinan" age={5} isStudent={true} />
    </>
  );
}
export default App