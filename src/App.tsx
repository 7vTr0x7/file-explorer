import { useState } from "react";

import { explorer } from "./utils/data";
import Folder from "./components/Folder";

const App = () => {
  const [explorerData, setExplorerData] = useState<ExplorerType>(explorer);

  return (
    <div>
      <Folder explorerData={explorerData} />
    </div>
  );
};

export default App;
