import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}> Contact</button>
    </nav>
  );
};

const HomePage = () => <p>Home Page</p>;
const AboutPage = () => <p>About Page</p>;
const ContactPage = () => <p>Contact Page</p>;

const App = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

export default App;
export { App, HomePage, AboutPage, ContactPage };
