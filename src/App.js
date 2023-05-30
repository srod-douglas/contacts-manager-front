import RoutesMain from "./routes";
import { ClientProvider } from "./contexts/client";
import { ContactProvider } from "./contexts/contact";

function App() {
  return (
    <div className="App">
      <ClientProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </ClientProvider>
    </div>
  );
}

export default App;
