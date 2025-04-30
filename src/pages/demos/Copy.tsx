import React from "react";
import { Employee, GustoApiProvider } from "@gusto/embedded-react-sdk";

const Copy: React.FC = () => {
  return (
    <GustoApiProvider
      config={{ baseUrl: "https://sdkdemo.gusto.com" }}
      // dictionary={{
      //   en: {
      //     ["Employee.PaymentMethod"]: {
      //       title: "DemoCo would like to pay you money",
      //       directDepositDescription: "This is easiest for us",
      //       checkDescription: "Not so great",
      //       addAnotherCta: "Create a bank account",
      //       submitCta: "Save and next",
      //     },
      //   },
      // }}
    >
      <Employee.PaymentMethod
        employeeId="123"
        onEvent={(eventType, eventData) => {
          console.log(eventType, eventData);
        }}
      />
    </GustoApiProvider>
  );
};

export default Copy;
