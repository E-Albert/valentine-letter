import envelopeBody from "../assets/envelope-body.png";
import envelopeFlap from "../assets/envelopeFlap.png";
import letter from "../assets/letter.png";

import React from 'react'

const Envelope = () => {
  return (
    <div className="envelope-container">
      <img src={letter} alt="Letter" className="letter" />
      <img src={envelopeBody} alt="Envelope body" className="envelope-body" />
      <img src={envelopeFlap} alt="Envelope flap" className="envelope-flap" />
    </div>
  );
}

export default Envelope