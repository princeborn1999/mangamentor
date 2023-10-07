import { Link } from "react-router-dom";

function TopNavComponent() {
  return (
    <div className="flex justify-center">
      <nav className="flex">
        <Link to="/">
          <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold ">
            HOME
          </li>
        </Link>
        <Link to="/Comparisons">
          <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold">
            COMPARISONS
          </li>
        </Link>
        <Link to="/Resources">
          <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold">
            RESOURCES
          </li>
        </Link>
        <Link to="/Collection">
          <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold ">
            COLLECTION
          </li>
        </Link>
        <Link to="/Tips">
          <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold ">
            TIPS
          </li>
        </Link>
      </nav>
    </div>
  );
}
export default TopNavComponent;
