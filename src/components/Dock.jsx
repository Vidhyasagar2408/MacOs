import React from "react";
import "./dock.scss";
const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon github">
        <i class="ri-github-line"></i>
      </div>
      <div className="icon notes">
        <i class="ri-sticky-note-fill"></i>
      </div>
      <div className="icon pdf">
        <i class="ri-file-pdf-2-fill"></i>
      </div>
      <div className="icon calendar">
        <i class="ri-calendar-fill"></i>
      </div>
      <div className="icon spotify">
        <i class="ri-spotify-fill"></i>
      </div>
      <div className="icon mail">
        <i class="ri-mail-fill"></i>
      </div>
      <div className="icon linkedin">
        <i class="ri-linkedin-box-fill"></i>
      </div>
      <div className="icon terminal">
        <i class="ri-terminal-line"></i>
      </div>
    </footer>
  );
};

export default Dock;
