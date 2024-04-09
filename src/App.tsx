import { useState } from "react";

import { explorer } from "./utils/data";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

const App = () => {
  const [explorerData, setExplorerData] = useState<ExplorerType>(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (
    isFolder: boolean,
    item: string,
    folderId: string
  ) => {
    const finalTree: ExplorerType = insertNode({
      explorerData,
      folderId,
      item,
      isFolder,
    });

    setExplorerData(finalTree);
  };

  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorerData={explorerData} />
    </div>
  );
};

export default App;
