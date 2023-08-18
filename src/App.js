import "./components/accordion";
import "./components/faqs";

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
