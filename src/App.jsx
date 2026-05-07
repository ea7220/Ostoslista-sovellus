import { useState } from "react";

import Header from "./tehtava/Header";
import ItemList from "./tehtava/ItemList";
import AddItemForm from "./tehtava/AddItemForm";

function App() {
  const [items, setItems] = useState(["omena", "banaani", "kiivi"]);

  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
      <Header />

      <AddItemForm onAddItem={addItem} />

      <ItemList items={items} />
    </div>
  );
}

export default App;
