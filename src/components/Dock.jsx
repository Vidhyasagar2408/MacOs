import React from "react";
import "./dock.scss";

const Dock = ({ setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <i class="ri-github-line"></i>
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, note: true }));
        }}
        className="icon notes"
      >
        <i class="ri-sticky-note-fill"></i>
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <i class="ri-file-pdf-2-fill"></i>
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com", "_blank");
        }}
        className="icon calendar"
      >
        <i class="ri-calendar-fill"></i>
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <i class="ri-spotify-fill"></i>
      </div>
      <div
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=vs1522250@gmail.com",
            "_blank",
          );
        }}
        className="icon mail"
      >
        <i class="ri-mail-fill"></i>
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/vidya-sagar-02a94a27a/",
            "_blank",
          );
        }}
        className="icon links"
      >
        <i class="ri-links-line"></i>
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: true }));
        }}
        className="icon terminal"
      >
        <i class="ri-terminal-line"></i>
      </div>
    </footer>
  );
};

export default Dock;
