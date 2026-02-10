import { useState } from "react";
import letter from "../assets/valentine-letter.png";
import envelopeBody from "../assets/envelope-body.png";
import envelopeFlap from "../assets/envelope-head.png";
import envelopeBackFlap from "../assets/envelope-backhead.png";
import envelopeInnerBody from "../assets/envelope-innerbody.png";

import { motion } from "framer-motion";

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="envelope-container" onClick={() => setIsOpen(true)}>
      <div className="envelope-stage">
        <img
          src={envelopeInnerBody}
          className={`envelope-body-inner ${isOpen ? "open" : ""}`}
        />

        <motion.img
          src={letter}
          className="letter"
          alt=""
          initial={{ y: 180, opacity: 0 }}
          animate={{ y: 180, opacity: 0 }}
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
