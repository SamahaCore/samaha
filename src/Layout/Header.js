import Logo from "../Components/Header/Logo";
import Navigation from "../Components/Header/Navigation";

const Header = () => {
  return (
    <header className="basis-1/6 flex flex-row justify-between">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;