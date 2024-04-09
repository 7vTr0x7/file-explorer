/// <reference types="vite/client" />

type ExplorerType = {
  id: string;
  name: string;
  isFolder: boolean;
  items: {
    id: string;
    name: string;
    isFolder: boolean;
    items: {
      id: string;
      name: string;
      isFolder: boolean;
      items: {
        id: string;
        name: string;
        isFolder: boolean;
        items: never[];
      }[];
    }[];
  }[];
};

type StateType = {
  visibility: boolean;
  isFolder: boolean;
};

type NodeType = {
  explorerData: ExplorerType;
  folderId: string;
  item: string;
  isFolder: boolean;
};
