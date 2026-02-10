import { useState } from "react";
import letter from "../assets/valentine-letter.png";
import envelopeBody from "../assets/envelope-body.png";
import envelopeFlap from "../assets/envelope-head.png";
import envelopeBackFlap from "../assets/envelope-backhead.png";
import envelopeInnerBody from "../assets/envelope-innerbody.png";

import { motion } from "framer-motion";

function Envelope() {
    const [isOpen, setIsOpen] = useState(false);
    const [letterReleased, setLetterReleased] = useState(false);

  return (
    <div
      className="envelope-container"
      onClick={() => {
        setIsOpen(true);
        setTimeout(() => setLetterReleased(true), 650);
      }}
    >
      <div className="envelope-stage">
        <img
          src={envelopeInnerBody}
          className={`envelope-body-inner ${isOpen ? "open" : ""}`}
        />

        <motion.img
          src={letter}
          className={`letter ${letterReleased ? "released" : ""}`}
          alt=""
          initial={{
            scale: 0.2,
            opacity: 0,
            y: 0,
          }}
          animate={{
            scale: letterReleased ? 1 : 0.2,
            opacity: letterReleased ? 1 : 0,
            y: letterReleased ? -120 : 0, // 👈 THIS IS THE FIX
          }}
          transition={{
            scale: { duration: 0.8, ease: "easeOut" },
            opacity: { duration: 0.3 },
            y: { duration: 0.6, ease: "easeOut" },
          }}
        />

        <img
          src={envelopeBody}
          className={`envelope-body-front ${isOpen ? "open" : ""}`}
        />

        <div className="flap-wrapper">
          <motion.div
            className="flap"
            initial={{ rotateX: 0, y: 0 }}
            animate={{
              rotateX: isOpen ? -180 : 0,
              y: isOpen ? 12 : 0, // 👈 small downward settle
            }}
            transition={{
              rotateX: { duration: 0.8, ease: "easeInOut" },
              y: { duration: 0.3, ease: "easeOut", delay: 0.25 },
            }}
          >
            <img src={envelopeFlap} className="flap-front" alt="" />
            <img src={envelopeBackFlap} className="flap-back" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Envelope;
