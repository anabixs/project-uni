import { Dispatch, SetStateAction } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopIcon from "@mui/icons-material/Laptop";
import MonitorIcon from "@mui/icons-material/Monitor";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import "./App.css";
import Models from "./Models";
export default function Table() {
  const [phoneDropdown, setPhoneDropdown] = useState(false);
  const [tabletDropdown, setTabletDropdown] = useState(false);
  const [laptopDropdown, setLaptopDropdown] = useState(false);
  const [pcDropdown, setPcDropdown] = useState(false);

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

  const toggleDropdown = (
    dropdownStateSetter: Dispatch<SetStateAction<boolean>>
  ) => {
    setPhoneDropdown(false);
    setTabletDropdown(false);
    setLaptopDropdown(false);
    setPcDropdown(false);
    dropdownStateSetter((prev) => !prev);
  };

  return (
    <Grid container columnSpacing={12}>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
          onClick={() => toggleDropdown(setPhoneDropdown)}
        >
          <PhoneIphoneIcon fontSize="large" />
          <span>Phone repair</span>
        </ColorButton>
        {phoneDropdown && (
          <div className="models">
            <Models />
          </div>
        )}
      </Grid>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
          onClick={() => toggleDropdown(setTabletDropdown)}
        >
          <TabletMacIcon fontSize="large" />
          <span>Tablet repair</span>
        </ColorButton>
        {tabletDropdown && (
          <div className="models">
            <Models />
          </div>
        )}
      </Grid>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
          onClick={() => toggleDropdown(setLaptopDropdown)}
        >
          <LaptopIcon fontSize="large" />
          <span>Laptop repair</span>
        </ColorButton>
        {laptopDropdown && (
          <div className="models">
            <Models />
          </div>
        )}
      </Grid>
      <Grid xs={3}>
        <ColorButton
          className="table-button"
          variant="outlined"
          href="#text-buttons"
          onClick={() => toggleDropdown(setPcDropdown)}
        >
          <MonitorIcon fontSize="large" />
          <span>PC repair</span>
        </ColorButton>
        {pcDropdown && (
          <div className="models">
            <Models />
          </div>
        )}
      </Grid>
    </Grid>
  );
}
