import "./App.css";
import Card from "./components/Card";
import technologies from "./data/technologies";

function App() {
  const technologyList = technologies.map((t) => {
    return <Card title={t.name} description={t.description} />;
  });

  return (
    <div className="App">
      <h1>My firts web with REACT</h1>
      <div className="container">{technologyList}</div>
    </div>
  );
}
export default App;
