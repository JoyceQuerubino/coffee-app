import React from "react";
import Providers from "@contexts/Providers";
import { Home } from "@screens/Home";

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}