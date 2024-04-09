import { useState } from "react";

type ParamType = {
  handleInsertNode: (isFolder: boolean, item: string, folderId: string) => void;
  explorerData: ExplorerType;
};

const Folder = ({ handleInsertNode, explorerData }: ParamType) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [showInput, setShowInput] = useState<StateType>({
    visibility: false,
    isFolder: false,
  });

  const handleNewFolder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isFolder: boolean
  ) => {
    setExpand(true);
    e.stopPropagation();
    setShowInput({
      visibility: true,
      isFolder,
    });
  };

  const onFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText) {
      handleInsertNode(showInput.isFolder, inputText, explorerData.id);
      setShowInput({ ...showInput, visibility: false });
    }
  };

  return (
    <>
      {explorerData.isFolder ? (
        <div>
          <div className="flex justify-between p-2 w-[400px] m-2 bg-gray-300 ">
            <span
              className="cursor-pointer mb-1 ml-1 mr-1"
              onClick={() => setExpand((prev) => !prev)}>
              📁 {explorerData.name}
            </span>
            <div>
              <button
                className="font-bold bg-gray-600 mr-2 px-2"
                onClick={(e) => handleNewFolder(e, true)}>
                Folder +
              </button>
              <button
                className="font-bold bg-gray-600 px-2"
                onClick={(e) => handleNewFolder(e, false)}>
                File +
              </button>
            </div>
          </div>
          <div className={` ${expand ? " block " : "hidden"} pl-7`}>
            {showInput.visibility && (
              <div className="flex items-center gap-2">
                <span className="mt-1">{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => onFolder(e)}
                  onBlur={() =>
                    setShowInput({ ...showInput, visibility: false })
                  }
                  className="mt-1 p-1 flex border border-black cursor-pointer justify-between items-center"
                  autoFocus
                />
              </div>
            )}

            {explorerData.items.map((exp) => {
              return (
                <Folder
                  handleInsertNode={handleInsertNode}
                  explorerData={exp}
                  key={exp.id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <span className="mt-1 pl-1 flex flex-col">📄 {explorerData.name}</span>
      )}
    </>
  );
};

export default Folder;
