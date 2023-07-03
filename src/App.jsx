import CardWrapper from './components/Card'
import Card from 'react-bootstrap/Card'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <CardWrapper>
      <Card.Img variant='top' src='../public/Desert_Electric.jpg'></Card.Img>
    </CardWrapper>
  )
}

export default App
