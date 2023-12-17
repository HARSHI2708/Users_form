import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>

        <table className="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-primary me-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn btn-outline-primary me-2"
                  >
                    Edit
                  </Link>
                  <DeleteIcon onClick={() => deleteUser(user.id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
