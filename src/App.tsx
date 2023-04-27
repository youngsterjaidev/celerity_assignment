import React, { useState } from "react";
import { Home, Shipping, Booking } from "./pages";
import { defaultTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components"
import { Router } from "@reach/router"

function App() {
  const [] = useState();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Home path="/" />
        <Booking path="/book" />
        <Shipping path="/ship" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
