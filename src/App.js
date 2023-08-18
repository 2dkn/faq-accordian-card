import "./components/accordion";
import "./components/faqs";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
