import { Box, Container, CssBaseline } from "@mui/material";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainContainer({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen pt-20 sm:pt-24 md:pt-32 px-6">
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">{children}</Container>
      <Footer />
    </div>
  );
}
