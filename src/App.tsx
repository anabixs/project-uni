import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "./Table";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" gutterBottom>
          <b>REPAIR YOUR DEVICE</b>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Choose your device
        </Typography>
        <Table />
      </Box>
    </>
  );
}

export default App;
