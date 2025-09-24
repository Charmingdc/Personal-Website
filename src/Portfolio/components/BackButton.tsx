import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      <ChevronLeft /> Back
    </button>
  );
};
export default BackButton;
