import React from "react";
import { GustoProviderCustomUIAdapter } from "@gusto/embedded-react-sdk";
import { EmployeeOnboardingFlow } from "@gusto/embedded-react-sdk";
import { DemoCoAdapter } from "../../adapters/DemoCoAdapter";

const Adapter: React.FC = () => {
  return (
    <GustoProviderCustomUIAdapter
      config={{ baseUrl: "https://sdkdemo.gusto.com" }}
      components={DemoCoAdapter}
    >
      <EmployeeOnboardingFlow
        companyId="demo"
        onEvent={(eventType, eventData) => {
          console.log(eventType, eventData);
        }}
      />
    </GustoProviderCustomUIAdapter>
  );
};

export default Adapter;
