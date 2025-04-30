import React from "react";
import { Routes, Route } from "react-router-dom";
import withGustoProvider from "../../hoc/withGustoProvider";

// Import sub-routes
import EmployeeList from "./composition/EmployeeList";
import Landing from "./composition/Landing";
import Profile from "./composition/Profile";
import TaxContext from "./composition/TaxContext";
import Taxes from "./composition/Taxes";

const CompositionComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="landing" element={<Landing />} />
      <Route path="employee-list" element={<EmployeeList />} />
      <Route path="profile" element={<Profile />} />
      <Route path="tax-context" element={<TaxContext />} />
      <Route path="taxes" element={<Taxes />} />
      <Route path="*" element={<EmployeeList />} />
    </Routes>
  );
};

export const Composition = withGustoProvider(CompositionComponent);

export default Composition;
