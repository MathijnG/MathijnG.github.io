import MeshBackground from "./components/MeshBackground.jsx";
import CursorLight from "./components/CursorLight.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <MeshBackground />
      <CursorLight />
      <main className="page page-projects-only">
        <Projects />
      </main>
    </>
  );
}
