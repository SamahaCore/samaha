import NavigationLink from "./NavigationLink";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between">
      <NavigationLink>Directory</NavigationLink>
      <NavigationLink>Projects</NavigationLink>
      <NavigationLink>Our Story</NavigationLink>
      <NavigationLink>Contact Us</NavigationLink>
    </div>
  );
};

export default Navigation;
