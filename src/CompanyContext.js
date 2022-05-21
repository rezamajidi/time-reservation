import { createContext } from "react";

const CompanyContext = createContext({
  companies: [],
  setCompanies: () => {},
});

export default CompanyContext;
