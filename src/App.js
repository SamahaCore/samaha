import Header from "./Layout/Header";
import Body from "./Layout/Body";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="flex flex-col font-paragraph">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
