import Home from "./pages";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
