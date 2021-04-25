import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isPanding, setPanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=200";
    axios(url)
      .then((data) => {
        setPanding(false);
        setUsers(data.data.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPanding(false);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center mt-3 mb-5">Choose your life partner.</h1>
      <h3 className="text-center mt-3 lead">
        {isPanding && <div>Loading....</div>}
      </h3>
      {error && <div> {error} </div>}
      <Container>
        <Row>
          {users.map((user) => (
            <CardItem user={user} key={user.id}></CardItem>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
