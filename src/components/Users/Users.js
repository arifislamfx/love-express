import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Users = (props) => {
  const { name, username, email, id } = props.member;

  return (
    <Col className="m-2" md={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <Link to={"/user/" + id}>{name}</Link>{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Users;
