import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const [members, setMembers] = useState([]);
  const [isPanding, setPanding] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
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
      <h3 className="text-center mt-3 lead">
        {isPanding && <div>Loading....</div>}
      </h3>
      {error && <div> {error} </div>}
      <h1 className="text-center mt-5">{id} Details Coming sooon </h1>
      <h4>{members.map((member) => member.id === id)}</h4>
    </div>
  );
};

export default UserDetails;
