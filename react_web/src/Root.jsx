import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import postMessage from "../utils/postMessage";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const data = {
      eventName: "routeChange",
      router: location,
      location: window.location,
    };
    postMessage(data);
  }, [location]);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Root;
