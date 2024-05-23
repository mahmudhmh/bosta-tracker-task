import { useNavigate } from "react-router-dom";

function LinkButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/")}>&larr; Go back</button>;
}

export default LinkButton;
