import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=200";
    axios(url)
      .then((data) => {
        console.log(data.data.results);
        return setUsers(data.data.results);
      })
      .catch((err) => err.message);
  }, []);
  return (
    <div>
      <h1 className="text-center mt-3 mb-5">Choose your life partner.</h1>

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
