import React from "react";
import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";

const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  

export const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>{component}</NativeBaseProvider>
  );
};
