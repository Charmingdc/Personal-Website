import { useNavigate } from "react-router-dom";

const CdBack = () => {
  const navigate = useNavigate();

  return (
    <button className="cd-back" onClick={() => navigate(-1)}>
      <span className="current-dir"> ~/blog $ </span> cd back
      <span className="cursor"></span>
    </button>
  );
};
export default CdBack;
