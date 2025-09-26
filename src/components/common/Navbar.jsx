import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
        <Link to="/report">Report</Link>
    </nav>
  );
}

// Add <Link to="/sponsorship">Sponsorship</Link> to finished navbar