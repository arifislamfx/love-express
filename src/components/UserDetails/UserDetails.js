import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  const [friend, setFriend] = useState([]);
  const history = useHistory();

  const [isPending, setPending] = useState(true);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    axios(url)
      .then((data) => {
        setFriend(data.data);
        setPending(false);
      })
      .catch((err) => err.message);
  }, [userId]);

  const goBack = () => {
    history.push("/about");
  };

  return (
    <div className="text-center">
      <p>Hello friends: {userId}</p>
      {isPending && <div className="lead">Loading...</div>}
      <h2>Name: {friend.name} </h2>
      <h4>Email: {friend.email} </h4>
      <h4>Website: {friend.website} </h4>
      <h4>Phone: {friend.phone} </h4>
      <Button onClick={() => goBack()}>Go Back</Button>
    </div>
  );
};

export default UserDetails;
