import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => (
  <Box
    sx={{
      mt: [3, 4, 5],
      mr: 6,
      mb: [12, 15, 21],
    }}
  >
    <Grid
      container
      spacing={3}
      sx={{
        m: [0, 0, 2],
      }}
    >
      <Grid
        item
        container
        sx={{
          width: [170, 200, 238],
          mt: -1,
        }}
      >
        <Grid item>
          <Image
            alt="intro"
            src="/../public/image10.png"
            width={190}
            height={38}
          />
        </Grid>
        <Grid
          item
          sx={{
            width: [73, 90, 110],
          }}
        >
          <Image
            alt="intro"
            src="/../public/image9.png"
            width={81}
            height={21}
          />
        </Grid>
        <Grid
          item
          sx={{
            width: [73, 85, 97],
          }}
        >
          <Image
            alt="intro"
            src="/../public/image11.png"
            width={81}
            height={21}
          />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: [121, 131, 160],
        }}
      >
        <Image
          alt="intro"
          src="/../public/image14.png"
          width={141}
          height={52}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: [142, 162, 190],
        }}
      >
        <Image
          alt="intro"
          src="/../public/image15.png"
          width={174}
          height={47}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: [140, 140, 200],
        }}
      >
        <Image
          alt="intro"
          src="/../public/image16.png"
          width={136}
          height={49}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: [145, 155, 230],
          mt: 1.5,
          mr: 2,
        }}
      >
        <Image
          alt="intro"
          src="/../public/image12.png"
          width={163}
          height={27}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: [120, 135, 160],
        }}
      >
        <Image
          alt="intro"
          src="/../public/image13.png"
          width={141}
          height={60}
        />
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
