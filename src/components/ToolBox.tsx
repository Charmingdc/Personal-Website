interface ToolProps {
  iconUrl: string;
  altText: string;
}

const ToolBox: React.FC<{ toolDetails: ToolProps }> = ({toolDetails}) => {
  return (
    <div>
      <img src={toolDetails.iconUrl} alt={toolDetails.altText} />
      
      <p> { toolDetails.altText } </p>
    </div>
  )
}

export default ToolBox;