import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = () => {
  const CNVAfooter = "Hello (Home)";
  return (
    <div>
      <h2>{CNVAfooter}</h2>
      <Search />
      <CardInfo />
    </div>
  );
};

export default Home;