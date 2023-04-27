import React, { useState } from "react";
import { Home, Shipping, Booking } from "./pages";
import { defaultTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { Router } from "@reach/router";
import { Navbar } from "./components";

interface Props {
  path: string;
}

export default function App({}: Props) {
  const [] = useState();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Router>
        <Booking path="/book" />
        <Shipping path="/ship" />
        <Home path="/" />
      </Router>
    </ThemeProvider>
  );
}
