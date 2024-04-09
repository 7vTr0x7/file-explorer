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
