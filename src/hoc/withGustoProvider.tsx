import React from "react";
import { GustoApiProvider } from "@gusto/embedded-react-sdk";
import "@gusto/embedded-react-sdk/style.css";

export const withGustoProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithGustoProvider: React.FC<P> = (props) => {
    return (
      <GustoApiProvider config={{ baseUrl: "https://sdkdemo.gusto.com" }}>
        <Component {...props} />
      </GustoApiProvider>
    );
  };

  return WithGustoProvider;
};

export default withGustoProvider;
