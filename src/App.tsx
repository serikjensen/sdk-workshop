import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Layout from "./components/layout/Layout";
import { theme } from "./design-system";

// Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

// Demo Pages
import DirectDepositDemo from "./pages/demos/DirectDepositDemo";
import PayStatementsDemo from "./pages/demos/PayStatementsDemo";
import PayrollFormsDemo from "./pages/demos/PayrollFormsDemo";
import TaxCalculatorDemo from "./pages/demos/TaxCalculatorDemo";
import MenuDemo from "./pages/demos/MenuDemo";
import ButtonDemo from "./pages/demos/ButtonDemo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />

            {/* Demo Routes */}
            <Route
              path="/demo/direct-deposit"
              element={<DirectDepositDemo />}
            />
            <Route
              path="/demo/pay-statements"
              element={<PayStatementsDemo />}
            />
            <Route path="/demo/payroll-forms" element={<PayrollFormsDemo />} />
            <Route
              path="/demo/tax-calculator"
              element={<TaxCalculatorDemo />}
            />
            <Route path="/demo/menu" element={<MenuDemo />} />
            <Route path="/demo/button" element={<ButtonDemo />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
