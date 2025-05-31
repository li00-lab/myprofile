import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", path: "/" },
  { label: "My Skills", path: "/skills" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 220,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bgcolor: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ color: "#00F0FF", fontWeight: "bold" }}>
          Hello
        </Typography>
      </Box>

      <Box>
        <List>
          {navItems.map(({ label, path }) => (
            <ListItemButton
              key={path}
              component={Link}
              to={path}
              selected={location.pathname === path}
              sx={{
                color: "#fff",
                "&.Mui-selected": {
                  bgcolor: "#222",
                },
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box>
        <IconButton color="inherit">
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit">
          <GitHub />
        </IconButton>
        <IconButton color="inherit">
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
}
