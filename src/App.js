import AboutContainer from "./components/About/AboutContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavMenu from "./components/Nav/NavMenu";
import ProjectContainer from "./components/Projects/ProjectContainer";

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <HeaderContainer />
      <main>
        <AboutContainer />
        <ProjectContainer />
      </main>
      <FooterContainer />
    </div>
  );
}
