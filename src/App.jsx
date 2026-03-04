import "./app.scss";
import Dock from "./components/Dock.jsx";
import Nav from "./components/Nav.jsx";
import Github from "./components/windows/github.jsx";
import Note from "./components/windows/Note.jsx";
import Resume from "./components/windows/resume.jsx";
import Spotify from "./components/windows/spotify.jsx";
import Cli from "./components/windows/cli.jsx";
function App() {
  
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </main>
  );
}

export default App;
