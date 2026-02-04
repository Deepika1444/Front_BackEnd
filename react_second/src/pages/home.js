//(3rd class)

// const Home = () => <h1>Home Page {req.params.user}</h1>;

// export default Home;


import { useParams } from "react-router-dom";

const Home = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Home Page</h1>
      <h2>User Param: {name}</h2>
    </div>
  );
};

export default Home;

