const Section = (props) => {
  return (
    <div id={props.id} className="w-screen h-screen">
      {props.children}
    </div>
  );
};

export default Section;
