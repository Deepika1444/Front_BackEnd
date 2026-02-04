//(3rd class)

// const About = () => <h1>About Page</h1>;

// export default About;



import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <Link to="/details">Go to About Details</Link>

      <Outlet />
    </div>
  );
};

export default About;

