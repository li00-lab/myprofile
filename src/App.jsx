import React from "react";
import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import StacksPage from "./pages/Stacks";
// import other pages here later

const theme = createTheme({
  palette: {
    mode: "dark", // set to "dark" to match the modern theme
    primary: {
      main: "#00F0FF",
    },
    background: {
      default: "#121212",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ marginLeft: "220px", p: 3 }}>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/stacks" element={<StacksPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
