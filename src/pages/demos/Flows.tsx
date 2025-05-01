import React from "react";
import { EmployeeOnboardingFlow } from "@gusto/embedded-react-sdk";
import withGustoProvider from "../../hoc/withGustoProvider";

const FlowsComponent: React.FC = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <EmployeeOnboardingFlow
        companyId="demo"
        onEvent={(evt, data) => {
          console.log(`event from sdk: `, evt, data);
        }}
        defaultValues={{
          profile: {
            employee: {
              firstName: "Jennifer",
              lastName: "Smith",
              email: "sarah.smith@example.com",
              dateOfBirth: "1990-01-01",
            },
            homeAddress: {
              street1: "123 Main St",
              city: "Anytown",
              state: "CA",
              zip: "12345",
            },
          },
        }}
      />
    </div>
  );
};

export const Flows = withGustoProvider(FlowsComponent);

export default Flows;
