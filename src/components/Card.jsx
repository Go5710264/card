import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const CardWrapper = ({children}) => {
  return (
    <Card border='info' className='mt-2 ms-2' style={{width: "18rem", padding: '0'}}>
    {children}
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text className="" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

CardWrapper.propTypes = {
  children: PropTypes.element
}

export default CardWrapper;