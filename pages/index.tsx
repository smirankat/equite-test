import { Box, Button, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box>
      <Box
        sx={{
          p: [3, 4, 5],
          maxWidth: [400, 500, 620],
          textAlign: ["center", "left", "left"],
          mx: ["auto", 0, 0],
          mt: 1,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: [30, 40, 50],
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Поделитесь своими результатами
        </Typography>
        <Typography
          sx={{
            color: "#AE8DE5",
            fontWeight: "light",
            fontSize: [20, 28, 35],
            textTransform: "uppercase",
          }}
        >
          И получите доверие большого количества инвесторов
        </Typography>
        <Button
          sx={{
            p: 0,
            mx: 1,
            my: 2,
            background: "#101C2B",
            border: "1px solid #C49BFF",
            borderRadius: 1.5,
            boxShadow: "0px 0px 20px rgba(188, 79, 255, 0.7)",
            width: [140, 160, 187],
            height: 50,
            color: "#AE8DE5",
            textTransform: "uppercase",
            "&:hover": {
              background: "#5040B2",
              color: "#fff",
              border: "none",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            Начать
          </Typography>
        </Button>
        <Button
          sx={{
            p: 0,
            mx: 1,
            my: 2,
            background: "#101C2B",
            border: "1px solid #C49BFF",
            borderRadius: 1.5,
            boxShadow: "0px 0px 20px rgba(188, 79, 255, 0.7)",
            width: [140, 160, 187],
            height: 50,
            color: "#AE8DE5",
            "&:hover": {
              background: "#5040B2",
              color: "white",
              border: "none",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            Я ТРЕЙДЕР
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
