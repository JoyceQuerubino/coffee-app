import React, { ReactNode } from "react";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import customTheme from "@theme/theme";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {

  const queryClient = new QueryClient;

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={customTheme}>{children}</NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default Providers;
