import React from "react";
import "./Contact.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div id="contactSection">
      <h2>Interressée par mon profile ?</h2>
      <h3>Contactez moi :</h3>
      <a className="contactLink" href="sadaoui.sabrina@hotmail.com">
        <FontAwesomeIcon className="contactIcon" icon={faLinkedin} size="1x" />
        <p>Par Mail</p>
      </a>
      <a className="contactLink" href="https://www.linkedin.com/in/sabrina-sadaoui-38bb18129/">
        <FontAwesomeIcon className="contactIcon" icon={faLinkedin} size="1x" />
        <p>Sur LinkeDin</p>
      </a>
    </div>
  );
}
