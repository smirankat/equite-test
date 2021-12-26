import Header from "./Header";
import Footer from "./Footer";
import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }: any) => (
  <Box
    sx={{
      position: "relative",
      maxWidth: 1920,
      mx: "auto",
      background: "#101C2B",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: [360, 430, 0],
        right: [-95, -50, 0],
        width: [900, 1200, 1485],
      }}
    >
      <Image alt="intro" src="/../public/intro.png" width={1485} height={695} />
      <Box
        sx={{
          position: "absolute",
          top: [25, 50, 60],
          right: [395, 500, 620],
          transform: "rotate(45deg)",
        }}
      >
        <Grid
          container
          rowSpacing={[1, 1.5, 2]}
          columns={4}
          width={[150, 200, 250]}
        >
          {Array.from(Array(16)).map((_, index) => (
            <Grid item xs={1} key={index}>
              <Box
                sx={{
                  width: [30, 38, 45],
                  height: [30, 38, 45],
                  border: "1px solid #C49BFF",
                  boxShadow: " 0px 0px 20px rgba(188, 79, 255, 0.7)",
                }}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: [180, 290, 300],
          right: [19, 30, 60],
          transform: "rotate(45deg)",
        }}
      >
        <Grid
          container
          rowSpacing={[1, 1.5, 2]}
          columns={4}
          width={[150, 200, 250]}
        >
          {Array.from(Array(16)).map((_, index) => (
            <Grid item xs={1} key={index}>
              <Box
                sx={{
                  width: [30, 38, 45],
                  height: [30, 38, 45],
                  border: "1px solid #EEE4FF",
                  boxShadow: "0px 0px 20px rgba(233, 198, 255, 0.5)",
                }}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    <Box
      sx={{
        position: "absolute",
        top: [490, 860, 380],
        right: [-720, -200, 0],
        width: 1920,
      }}
    >
      <Image alt="intro" src="/../public/bg.png" width={1920} height={478} />
    </Box>
    <Box
      sx={{
        position: "absolute",
        top: [535, 900, 420],
        right: [-720, -200, 0],
        width: 1920,
      }}
    >
      <Image alt="intro" src="/../public/line.png" width={1920} height={390} />
    </Box>
    <Box
      sx={{
        position: "absolute",
        top: [740, 840, 360],
        right: [-700, -200, 0],
        width: 1920,
      }}
    >
      <Image alt="intro" src="/../public/line1.png" width={1920} height={390} />
    </Box>
    <Box
      sx={{
        maxWidth: 1326,
        mx: "auto",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Header />
      {children}
      <Box
        sx={{
          mx: "auto",
          mt: [43, 50, 7],
          width: 120,
        }}
      >
        <Grid container spacing={3}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  border: "1px solid #C49BFF",
                  boxShadow: " 0px 0px 20px rgba(188, 79, 255, 0.7)",
                  transform: "rotate(45deg)",
                  "&:hover": {
                    background: "#C49BFF",
                  },
                }}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  </Box>
);

export default Layout;
