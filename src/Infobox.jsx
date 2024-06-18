import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./main.css";

export default function Infobox({ weatherInfromation }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1493936734716-77ba6da66365?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <Card sx={({ maxWidth: 345 }, { marginBottom: "2rem" })}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            weatherInfromation.humidity > 80
              ? RAIN_URL
              : weatherInfromation.temperature < 15
              ? COLD_URL
              : HOT_URL
          }
          title="green iguana"
        />
        <CardContent className="infobox">
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfromation.humidity > 80 ? (
              <ThunderstormIcon color="" />
            ) : weatherInfromation.temperature < 15 ? (
              <AcUnitIcon color="" />
            ) : (
              <WbSunnyIcon color="" />
            )}
            &nbsp;&nbsp;&nbsp;
            {weatherInfromation.city}
          </Typography>
          <Typography variant="span">
            <p>Temperature: {weatherInfromation.temperature}&deg;C</p>
            <p>Humidity: {weatherInfromation.humidity}</p>
            <p>Min. Temp: {weatherInfromation.minTemp}&deg;C</p>
            <p>Max. Temp: {weatherInfromation.maxTemp}&deg;C</p>
            <p>Feels Like: {weatherInfromation.feels_like}&deg;C</p>
            <p>
              <b>
                <i>
                  Weather Can Be Described As: "{weatherInfromation.weather}"
                </i>
              </b>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
