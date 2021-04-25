import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Users from "../Users/Users";

const About = () => {
  const [members, setMembers] = useState([]);
  const [isPanding, setPanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios(url)
      .then((data) => {
        setPanding(false);
        setMembers(data.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPanding(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Our Team</h1>
      <h3 className="text-center mt-3 lead">
        {isPanding && <div>Loading....</div>}
      </h3>
      {error && <div> {error} </div>}
      <Container>
        <Row>
          {members.map((member) => (
            <Users member={member} key={member.id}></Users>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
