import { useState } from "react";
import "./App.css";
import { explorer } from "./utils/data";
const App = () => {
  const [explorerData, setExplorerData] = useState<ExplorerType>(explorer);

  return <div>App</div>;
};

export default App;
