// src/components/opening/OpeningScreen.jsx

import { motion } from "framer-motion";
import WeddingMonogram from "./WeddingMonogram";
import { weddingDetails } from "../../data/weddingDetails";

function OpeningScreen({ onOpen }) {
  return (
    <motion.section
      className="opening-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onOpen}
    >
      <div className="opening-glow" />

      <div className="royal-arch" />

      <div className="floating-petals">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <motion.div
        className="invitation-card"
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.94,
          rotateX: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <p className="family-line">
          With the love & blessings of our families
        </p>

        <div className="gold-divider" />

        <WeddingMonogram />

        <p className="opening-message">
          {weddingDetails.openingLine}
        </p>

        <h1>
          {weddingDetails.bride}
          <span>&amp;</span>
          {weddingDetails.groom}
        </h1>

        <p className="wedding-date">
          {weddingDetails.weddingDate.toUpperCase()}
        </p>

        <motion.button
          className="wax-seal"
          aria-label="Open invitation"
          onClick={onOpen}
          whileTap={{
            scale: 0.9,
            rotate: -8,
          }}
        >
          JG
        </motion.button>

        <motion.button
          className="open-button"
          onClick={onOpen}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          OPEN INVITATION
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default OpeningScreen;