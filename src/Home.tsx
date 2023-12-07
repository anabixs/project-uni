import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "./Table";
import "./App.css";

export default function Home() {
  return (
    <>
      <Box sx={{ width: "95%", margin: "50px" }}>
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
