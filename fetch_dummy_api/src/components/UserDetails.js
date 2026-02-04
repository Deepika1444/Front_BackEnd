import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="details-wrapper">
      <div className="details-card">
        <h2>{user.name}</h2>

        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Company:</b> {user.company?.name}</p>
        <p><b>Latitude:</b> {user.address?.geo?.lat}</p>
        <p><b>Longitude:</b> {user.address?.geo?.lng}</p>

        <button onClick={() => navigate("/")}>⬅ Back</button>
      </div>
    </div>
  );
};

export default UserDetails;







// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UserDetails = () => {
//   const { id } = useParams(); // get id from URL
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, [id]);

//   if (!user) return <h2>Loading user details...</h2>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>User Details</h2>

//       <p><b>Name:</b> {user.name}</p>
//       <p><b>Email:</b> {user.email}</p>
//       <p><b>Phone:</b> {user.phone}</p>
//       <p><b>Company:</b> {user.company?.name}</p>
//       <p><b>Latitude:</b> {user.address?.geo?.lat}</p>
//       <p><b>Longitude:</b> {user.address?.geo?.lng}</p>

//       <br />

//       <button onClick={() => navigate("/")}>
//         ⬅ Back to Users
//       </button>
//     </div>
//   );
// };

// export default UserDetails;
