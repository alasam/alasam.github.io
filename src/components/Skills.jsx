import React from "react";

import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import Postgresql from "../assets/post.png";
import Rails from "../assets/rails.png";
import ReactLogo from "../assets/react.png";
import Ruby from "../assets/ruby.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills">
      {/* Container */}
      <div>
        <div>
          <p>Experience</p>
          <p>These are the technologies I work with</p>
        </div>
        <div>
          <img src={HTML} alt="HTML logo" />
          <p>HTML</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
