import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Link to={`/room?name=${name}`}>JOIN</Link>
    </div>
  );
};

export default Landing;
