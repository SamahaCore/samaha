import Logo from "../Components/Header/Logo";
import Navigation from "../Components/Header/Navigation";

const Header = () => {
  return (
    <header className="flex flex-row justify-between font-heading text-2xl">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;