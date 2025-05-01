import React from "react";
import { GustoProvider } from "@gusto/embedded-react-sdk";
import "@gusto/embedded-react-sdk/style.css";

export const withGustoProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithGustoProvider: React.FC<P> = (props) => {
    return (
      <GustoProvider config={{ baseUrl: "https://sdkdemo.gusto.com" }}>
        <Component {...props} />
      </GustoProvider>
    );
  };

  return WithGustoProvider;
};

export default withGustoProvider;
