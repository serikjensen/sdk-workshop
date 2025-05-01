import React from "react";
import { Employee } from "@gusto/embedded-react-sdk";
import withGustoProvider from "../../hoc/withGustoProvider";

const EventsComponent: React.FC = () => {
  return (
    <Employee.Profile
      companyId="123"
      onEvent={(eventType, eventData) => {
        console.log(eventType, eventData);
      }}
      defaultValues={{
        employee: {
          firstName: "Sarah",
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
      }}
    />
  );
};

const Events = withGustoProvider(EventsComponent);

export default Events;
