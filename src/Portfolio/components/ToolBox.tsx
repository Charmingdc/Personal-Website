interface ToolProps {
  iconUrl: string;
  altText: string;
}

const ToolBox: React.FC<{ toolDetails: ToolProps }> = ({ toolDetails }) => {
  return (
    <div className="tool-div">
      <div>
        <img src={toolDetails.iconUrl} alt={toolDetails.altText} />
      </div>

      <h3> {toolDetails.altText} </h3>
    </div>
  );
};

export default ToolBox;
