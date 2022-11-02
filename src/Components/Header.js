import { motion } from "framer-motion";
import { IoIosFootball } from "react-icons/io";

export default function Header() {
  return (
    <header className="header">
      <motion.h1
        className="title"
        initial={{ y: -500 }}
        animate={{ y: [-1500, 25, 0] }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        MEMORYB
        <IoIosFootball className="title-icon" />
        LL
      </motion.h1>
    </header>
  );
}
