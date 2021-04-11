//import React, { useContext } from "react";
//import { AppContext } from "./context";

import React from "react";
import { FaBars } from "react-icons/fa";

// custom hook, imports AppContext and useContext in one import
import {useGlobalContext} from "./context"

const Home = () => {
  // const data = useContext(AppContext)  // without the custom hook
  const {openSidebar, openModal} = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;
