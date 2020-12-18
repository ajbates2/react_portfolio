import HeaderContainer from "./components/Header/HeaderContainer";
import NavMenu from "./components/Nav/NavMenu";

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <main>
        <HeaderContainer />
      </main>
    </div>
  );
}