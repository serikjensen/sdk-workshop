import React from "react";
import { Employee, GustoProvider } from "@gusto/embedded-react-sdk";

const Copy: React.FC = () => {
  return (
    <GustoProvider
      config={{ baseUrl: "https://sdkdemo.gusto.com" }}
      dictionary={{
        en: {
          ["Employee.PaymentMethod"]: {
            title: "DemoCo would like to pay you money",
            directDepositDescription: "This is easiest for us",
            checkDescription: "Not so great",
            addAnotherCta: "Create a bank account",
            submitCta: "Next",
          },
        },
      }}
    >
      <Employee.PaymentMethod
        employeeId="123"
        onEvent={(eventType, eventData) => {
          console.log(eventType, eventData);
        }}
      />
    </GustoProvider>
  );
};

export default Copy;
