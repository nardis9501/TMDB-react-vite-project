import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function MiddleDividers({
  text,
  average,
  genres,
  homepage,
  companies,
}) {
  return (
    <Box sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2, py: 3 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Avatar sx={{ bgcolor: deepOrange[700], width: 56, height: 56 }}>
              {average}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Synopsis
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Geners
        </Typography>
        <Stack direction="row" spacing={1}>
          {genres.map((genres) => {
            const { id, name } = genres;
            return <Chip key={id} label={name} />;
          })}
        </Stack>
      </Box>
      <Divider variant="middle" />

      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Production companies
        </Typography>
        <Stack direction="row" spacing={1}>
          <div className="flex justify-around  flex-wrap w-full">
            {companies &&
              companies.map((genres) => {
                const { id, name, logo_path } = genres;

                return (
                  <div key={id} className="flex items-center p-2">
                    <img
                      className="h-10"
                      src={`http://image.tmdb.org/t/p/w300/${logo_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button href={homepage}>Movie Homepage</Button>
      </Box>
    </Box>
  );
}
