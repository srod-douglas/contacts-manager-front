import RoutesMain from "./routes";
import { ClientProvider } from "./contexts/client";
import { ContactProvider } from "./contexts/contact";
import './index.css'
function App() {
  return (
    <div className="App h-screen">
      <ClientProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </ClientProvider>
    </div>
  );
}

export default App;
