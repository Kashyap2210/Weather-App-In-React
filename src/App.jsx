import "./App.css";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Stack from "@mui/material/Stack";
// import Alert from "@mui/material/Alert";
// import Searchbox from "./Searchbox";
// import Infobox from "./Infobox";
import Weatherapp from "./Weatherapp";
import "./main.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
function App() {
  // let handleClick = () => {
  //   console.log("Button Was CLicked!");
  // };
  return (
    <>
      <div className="grand_div">
        <Weatherapp />
      </div>
    </>
  );
}

export default App;
