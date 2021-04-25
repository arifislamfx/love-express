import { Button, Card, Col } from "react-bootstrap";

const CardItem = (props) => {
  const { picture, name, gender } = props.user;

  return (
    <Col md={3}>
      <Card className="m-2" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={picture.large} />
        <Card.Body>
          <Card.Title>
            {name.first} {name.last}{" "}
          </Card.Title>
          <Card.Text>Gender: {gender} </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
