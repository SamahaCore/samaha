const NavigationLink = (props) => {
  return (
    <a className="px-2" href="/">
      {props.children}
    </a>
  );
};

export default NavigationLink;
