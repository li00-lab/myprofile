import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const jobTitles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Machine Learning Enthusiast",
];

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentJob = jobTitles[currentIndex];

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentJob.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentJob.substring(0, displayText.length + 1));
        }, 100); // Typing speed (adjust as needed)
      } else {
        // After full text is typed, wait 5 secs before deleting
        timeout = setTimeout(() => setIsTyping(false), 5000);
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Deleting speed (faster than typing)
      } else {
        // After deleting, move to next job title
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
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" component="h1" fontSize="4rem">
          Hi, I’m <span style={{ color: "#00F0FF" }}>Wenhan Li</span> <br />
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
