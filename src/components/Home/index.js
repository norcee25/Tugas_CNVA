import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = () => {
  const apphome = "Hello (Home)";
  return (
    <div>
      <h2>{apphome}</h2>
      <Search />
      <CardInfo />
    </div>
  );
};

export default Home;