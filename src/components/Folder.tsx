import { useState } from "react";

type ParamType = {
  explorerData: ExplorerType;
};

const Folder = ({ explorerData }: ParamType) => {
  const [expand, setExpand] = useState(false);

  console.log(explorerData);
  return (
    <>
      {explorerData.isFolder ? (
        <div>
          <div className="flex justify-between p-2 w-[300px] mt-2 bg-gray-300 ">
            <span
              className="cursor-pointer mb-1 ml-1 mr-1"
              onClick={() => setExpand((prev) => !prev)}>
              📁 {explorerData.name}
            </span>
            <div>
              <button className="font-bold bg-gray-600 mr-2 px-2">
                Folder +
              </button>
              <button className="font-bold bg-gray-600 px-2">File +</button>
            </div>
          </div>
          <div className={` ${expand ? " block " : "hidden"} pl-7`}>
            {explorerData.items.map((exp) => {
              return <Folder explorerData={exp} key={exp.id} />;
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
