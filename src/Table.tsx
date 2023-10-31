import Grid from "@mui/material/Unstable_Grid2";
import Button, { ButtonProps } from "@mui/material/Button";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopIcon from "@mui/icons-material/Laptop";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import "./App.css";
export default function Table() {
  const color = grey[300];
  const darkColor = grey[400];
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(color),
    borderColor: darkColor,
    "&:hover": {
      backgroundColor: color,
      borderColor: darkColor,
    },
  }));

  return (
    <Grid container columnSpacing={12}>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
        >
          <PhoneIphoneIcon fontSize="large" />
          <span>Phone repair</span>
        </ColorButton>
      </Grid>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
        >
          <TabletMacIcon fontSize="large" />
          <span>Tablet repair</span>
        </ColorButton>
      </Grid>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
        >
          <LaptopIcon fontSize="large" />
          <span>Laptop repair</span>
        </ColorButton>
      </Grid>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
        >
          <LaptopChromebookIcon fontSize="large" />
          <span>PC repair</span>
        </ColorButton>
      </Grid>
    </Grid>
  );
}
