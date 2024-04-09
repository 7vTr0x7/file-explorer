type ParamType = {
  explorerData: ExplorerType;
};

const Folder = ({ explorerData }: ParamType) => {
  console.log(explorerData);
  return <div>Folder</div>;
};

export default Folder;
