import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

export default function About() {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#121212",
        color: "#fff",
        pl: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" component="h1">
          Hi, I’m <span style={{ color: "#00F0FF" }}>Wenhan Li</span>,<br />
          web developer
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Front End Developer
        </Typography>
      </motion.div>

      <Button
        variant="outlined"
        sx={{
          mt: 4,
          borderColor: "#00F0FF",
          color: "#00F0FF",
          "&:hover": {
            borderColor: "#00F0FF",
            backgroundColor: "#00F0FF10",
          },
        }}
      >
        Contact me!
      </Button>
    </Box>
  );
}
