import Section from "../../UI/Section";
import Arabic from "./Arabic";
import Text from "../../UI/Text";
import Art from "../../UI/Art";

const Home = () => {
  return (
    <Section>
      <div className="flex justify-evenly items-center py-20 h-1/2">
        <Text basis="basis-1/3">
          Cooperate with one another in goodness and righteousness
        </Text>
        <Arabic basis="basis-1/3">
          وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ
        </Arabic>
      </div>
      <div className="flex justify-evenly items-center py-20 h-1/2">
        <Art basis="basis-1/3" />
        <Text basis="basis-1/3">
          Ad quis fugiat reprehenderit non ea ut non cupidatat proident duis.
          Ipsum mollit ex consequat irure mollit et nisi Lorem et reprehenderit.
          Mollit ullamco cillum ex fugiat sint aute anim. Cillum et eiusmod
          consectetur mollit labore id do officia nostrud in qui. Nostrud nulla
          enim proident enim excepteur et eu mollit eiusmod minim excepteur
          aliqua voluptate. Eu aliqua reprehenderit sint do exercitation ex amet
          veniam non occaecat magna proident.
        </Text>
      </div>
    </Section>
  );
};

export default Home;
