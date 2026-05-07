import Header from "./tehtava/Header";
import ItemList from "./tehtava/ItemList";

function App() {
  const testi = ["omena", "banaani", "kiivi"];

  return (
    <div>
      <Header />

      <ItemList items={testi} />
    </div>
  );
}

export default App;
