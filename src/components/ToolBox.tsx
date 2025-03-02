interface ToolProps {
  iconUrl: string;
  altText: string;
}

const ToolBox: React.FC<{ toolDetails: ToolProps }> = ({toolDetails}) => {
  return (
    <div>
      <h3> { toolDetails.altText } </h3>
    </div>
  )
}

export default ToolBox;