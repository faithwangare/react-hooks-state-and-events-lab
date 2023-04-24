import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState('.light');
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const themeClass = isDarkMode ? "light" : "dark";
  return (
    <div className={`App ${themeClass}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>{isDarkMode ? "Dark mode" : "Light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;