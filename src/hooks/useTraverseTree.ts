const useTraverseTree = () => {
  const insertNode = ({
    explorerData,
    folderId,
    item,
    isFolder,
  }: NodeType): ExplorerType => {
    if (explorerData.id === folderId && explorerData.isFolder) {
      explorerData.items.unshift({
        id: String(Math.floor(Math.random() * 1000)),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return explorerData;
    }

    let latestNode = [];

    latestNode = explorerData.items.map((explorerData) => {
      return insertNode({ explorerData, folderId, item, isFolder });
    });

    return { ...explorerData, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
