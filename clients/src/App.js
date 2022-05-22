import "./App.scss";
import Header from "./components/Header";
import Title from "./components/Title";
import Processes from "./components/Processes";
import Stages from "./components/Stages";

const App = () => {
  return (
    <section className="app">
      <div className="app__container">
        <Header />
        <Title />
        <div className="process__steps">
          <Processes />
          <Stages />
        </div>
      </div>
    </section>
  );
};

export default App;
