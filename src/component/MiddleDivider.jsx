import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function MiddleDividers({ details }) {
  const text = details.overview;
  const average = details.vote_average;
  const genres = details.genres;
  const homepage = details.homepage;
  const companies = details.production_companies;
  const popularity = details.popularity;
  const votes = details.vote_count;

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2, py: 3 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            {"Likes "}
            <Chip label={popularity} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {"Votes "}
              <Chip label={votes} />
              {average && (
                <Rating
                  name="customized-10"
                  defaultValue={average}
                  max={10}
                  readOnly
                />
              )}
            </Typography>
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
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

      {companies != 0 && (
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Production companies
          </Typography>
          <Stack direction="row" spacing={1}>
            <div className="flex justify-around  flex-wrap w-full">
              {companies.map((genres) => {
                const { id, logo_path } = genres;

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
      )}
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button href={homepage}>Movie Homepage</Button>
      </Box>
    </Box>
  );
}
