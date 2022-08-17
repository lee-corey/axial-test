import { useSearchParams, Link } from "react-router-dom";
import convert from "../../utils/convert";
import validate from "../../utils/validate";

export default function Detail() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>Detail</h1>
      {validate(searchParams.get("input")) ? (
        <div>
          <p>{`Original Value: ${searchParams.get("input")}`}</p>
          <p>{`Converted Value: ${convert(searchParams.get("input"))}`}</p>
        </div>
      ) : (
        <div>
          <h2>Invalid Financial Number</h2>
        </div>
      )}
      <Link to="/">Home</Link>
    </div>
  );
}
