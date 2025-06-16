import React from "react";
import { GustoProviderCustomUIAdapter } from "@gusto/embedded-react-sdk";
import { Employee } from "@gusto/embedded-react-sdk";
import { DemoCoAdapter } from "../../adapters/DemoCoAdapter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Adapter: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GustoProviderCustomUIAdapter
        config={{ baseUrl: "https://sdkdemo.gusto.com" }}
        components={DemoCoAdapter}
      >
        <Employee.OnboardingFlow
          companyId="demo"
          onEvent={(eventType, eventData) => {
            console.log(eventType, eventData);
          }}
        />
      </GustoProviderCustomUIAdapter>
    </LocalizationProvider>
  );
};

export default Adapter;
