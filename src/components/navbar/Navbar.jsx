/////////////
// IMPORTS //
/////////////
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lucky Dev
        </motion.span>
        <div className="social">
          <a href="#"><img src="/twitter.svg" alt=""/></a>
          <a href="#"><img src="/github.svg" alt=""/></a>
          <a href="#"><img src="/youtube.png" alt=""/></a>
          <a href="#"><img src="/discord.svg" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;