import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import mypic from "../assets/mypic.jpg";

const jobTitles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Project Management",
];

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentJob = jobTitles[currentIndex];

    if (isTyping) {
      if (displayText.length < currentJob.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentJob.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 5000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping]);

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
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        gap: 6,
        px: 4,
      }}
    >
      {/* Left Section: Text */}
      <Box sx={{ flex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h1" fontSize="4rem">
            Hi, I’m <span style={{ color: "#00F0FF" }}>Wenhan Li</span>
          </Typography>
          <Typography variant="subtitle1" mt={1} fontSize="2rem">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "linear",
              }}
              style={{ marginLeft: "2px" }}
            >
              |
            </motion.span>
          </Typography>
        </motion.div>
      </Box>

      {/* Right Section: Oval Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={mypic}
          alt="Wenhan Li Portrait"
          style={{
            width: "400px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "50% / 30%",
            boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)",
          }}
        />
      </Box>
    </Box>
  );
}
