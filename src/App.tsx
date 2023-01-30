import DarkModeProvider from "./context/theme-context/DarkModeProvider";
import Master from "./core/components/Master";

function App() {
  return (
    <DarkModeProvider>
      <Master />
    </DarkModeProvider>
  )
};

export default App;
