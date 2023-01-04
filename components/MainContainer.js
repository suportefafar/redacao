import { Box, Container, CssBaseline, Toolbar } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainContainer({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen px-6">
      <Navbar />
      <Toolbar />
      <Container maxWidth="sm">
        <Box className="py-4 sm:py-6">{children}</Box>
        <Footer />
      </Container>
    </div>
  );
}
