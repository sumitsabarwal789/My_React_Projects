import { useState } from "react";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar({ business, science, sports, health, general }) {
  const [backgroundColor, setBackgroundColor] = useState("");

  const toggleMode = () => {
    let dark = "black";
    let light = "white";
    let switchh = (document.body.style.backgroundColor =
      backgroundColor === dark ? light : dark);
    setBackgroundColor(switchh);
  };

  return (
    <>
      <nav className=" bg-white  dark:bg-gray-800  py-4 border border-b-gray-700 border-black flex justify-between fixed top-0 left-0 right-0 w-full">
        <section className="flex items-center justify-between">
          <div className=" mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link
                  onClick={general}
                  to="/general"
                  className="  text-lg font-semibold flex"
                >
                  <img
                    className="w-10 h-10 rounded-2xl"
                    src="./img2.webp"
                    alt=""
                  />
                  <span className="ml-5 font-bold text-lg mt-2 text-white hover:text-gray-500">
                    News Time
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="flex">
          <section className="mr-10">
            <ul className="hidden md:table list-none font-bold text-xl mt-1 ">
              <li className=" table-cell relative text-white hover:text-gray-500">
                <Link className={styles.itemss} onClick={science} to="/science">
                  Science
                </Link>
              </li>
              <li className="  table-cell relative text-white hover:text-gray-500">
                <Link
                  className={styles.itemss}
                  onClick={business}
                  to="/:Business"
                >
                  Business
                </Link>
              </li>
              <li className=" table-cell relative text-white hover:text-gray-500 ">
                <Link className={styles.itemss} onClick={sports} to="/sport">
                  Sports
                </Link>
              </li>
              <li className=" table-cell relative text-white hover:text-gray-500">
                <Link className={styles.itemss} onClick={health} to="/health">
                  Health
                </Link>
              </li>
            </ul>
          </section>

          {/* mobile view */}

          {/* end */}

          <section>
            <div className="hidden md:block">
              <div className="flex mr-10">
                <div>
                  <Toggle dark={toggleMode} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
