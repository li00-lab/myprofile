import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPython,
} from "react-icons/si";

const stackData = {
  FRONTEND: [
    { name: "Javascript", icon: <SiJavascript />, color: "#f7df1e" },
    { name: "Typescript", icon: <SiTypescript />, color: "#3178c6" },
    { name: "React", icon: <SiReact />, color: "#61dafb" },
    { name: "Next.Js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "Redux", icon: <SiRedux />, color: "#764abc" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  ],
  BACKEND: [{ name: "Python", icon: <SiPython />, color: "#3776ab" }],
  DATABASE: [
    { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export default function StacksPage() {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#121212",
        color: "#fff",
        minHeight: "100vh",
        pl: { xs: 2, sm: 4, md: "240px" },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 6,
          color: "#ccc",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        ✻ My Stack
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(stackData).map(([category, items]) => (
          <Box
            key={category}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: 6,
              gap: 10,
            }}
          >
            {/* Category Title */}
            <Typography
              variant="h5"
              component="h2"
              sx={{
                width: "160px",
                color: "#aaa",
                fontWeight: 700,
                textTransform: "uppercase",
                mt: 1,
              }}
            >
              {category}
            </Typography>

            {/* Stack Items in rows */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: 2,
                flexGrow: 1,
              }}
            >
              {items.map(({ name, icon, color }) => (
                <motion.div key={name} variants={itemVariants}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#1e1e1e",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      color: "#fff",
                    }}
                  >
                    <Box sx={{ fontSize: 28, color }}>{icon}</Box>
                    <Typography variant="body1">{name}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
