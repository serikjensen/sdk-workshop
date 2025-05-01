import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./design-system";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Flows from "./pages/demos/Flows";
import Composition from "./pages/demos/Composition";
import Copy from "./pages/demos/Copy";
import Theming from "./pages/demos/Theming";
import Events from "./pages/demos/Events";
import Adapter from "./pages/demos/Adapter";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/flows" element={<Flows />} />
            <Route path="/composition/*" element={<Composition />} />
            <Route path="/copy" element={<Copy />} />
            <Route path="/theming" element={<Theming />} />
            <Route path="/events" element={<Events />} />
            <Route path="/adapter" element={<Adapter />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
