import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useConfig } from "../contexts/ConfigContext";
function TopNavComponent() {
  const { state } = useConfig();
    
  const [showAddCollection, setShowAddCollection] = useState("");
  useEffect(()=>{
    if(state.isOpen){
      setShowAddCollection(true)
    }
  })
  return (
    <div className="hidden sm:flex justify-center">
      <nav className="flex rounded-2xl m-2 shadow-gray-400 shadow">
        <Link to="/mangamentor">
          <li
            className={
              "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold "
            }
          >
            HOME
          </li>
        </Link>
        <Link to="/Comparisons">
          <li
            className={`
             hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold`}
          >
            COMPARISONS
          </li>
        </Link>
        <Link to="/Resources">
          <li
            className={
              "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold"
            }
          >
            RESOURCES
          </li>
        </Link>
        {/* <Link to="/Collection">
          <li
            className={
              "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold "
            }
          >
            COLLECTION
          </li>
        </Link>
        {
          showAddCollection &&
          <Link to="/AddCollection">
            <li
              className={
                "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold "
              }
            >
              DEVELOPMODE
            </li>
        </Link>
        } */}
        {/* <Link to="/Tips">
          <li
            className={
              "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold "
            }
          >
            TIPS
          </li>
        </Link> */}
      </nav>
    </div>
  );
}
export default TopNavComponent;
