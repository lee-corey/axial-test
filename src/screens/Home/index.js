import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import validate from "../../utils/validate";
import "./index.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate(input)) {
      // working
      setError("");
      if (input) {
        navigate({
          pathname: "detail",
          search: createSearchParams({ input }).toString(),
        });
      }
    } else {
      setError("Invalid input");
    }
  };
  return (
    <div>
      <h1>Axial Test</h1>
      <h2>Financial number convertor</h2>
      <form className="home-main" onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ fontSize: 24 }}
        />
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
