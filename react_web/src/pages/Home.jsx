import isApp from "utils/isApp";

const welcomeType = isApp ? "Your app Home page" : "Your web Home page";

const Home = () => {
  return (
    <div>
      <h2> Home - {welcomeType}</h2>
    </div>
  );
};

export default Home;
