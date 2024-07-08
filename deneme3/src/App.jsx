//import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,ListGroup,ListGroupItem} from "reactstrap"
function App() {
  const categories = [
    { id: 1, name: "Kategori 1" },
    { id: 2, name: "Kategori 2" },
    { id: 3, name: "Kategori 3" },
    ];

  return (
    <>
    <Container>
      <Row>
      <h1>Listeleme Örnek</h1>
      <ListGroup>
        {categories.map(category => (
          <ListGroupItem key={category.id}>
            {category.name}
          </ListGroupItem>
        ))}
      </ListGroup>
      </Row>
    </Container>
    </>
  )
}

export default App
