import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404</h2>
      <Link to={"/"}>Back to Homepage</Link>
    </div>
  );
}
