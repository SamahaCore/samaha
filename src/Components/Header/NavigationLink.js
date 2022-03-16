const NavigationLink = (props) => {
  return (
    <a href={`#${props.href}`} className="px-2">
      {props.children}
    </a>
  );
};

export default NavigationLink;
