import Logo from "./Logo";
import Generation from "./Generation";
const Header = () => {
    const Appheader= "Hello (Header)"
    return (
      <div>
        <h2>{Appheader}</h2>
        <Logo/>
        <Generation/>
      </div>
    );
  };
  
export default Header;