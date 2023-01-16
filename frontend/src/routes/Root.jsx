import React from "react";
import { useEffect } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  const [display, setDisplay] = React.useState("none");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setDisplay("block");
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div style={{ display: display }}>
      <App />
    </div>
  );
}
