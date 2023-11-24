import { useEffect } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import axios from "axios";

export default function Models() {
  const items = ["Hello", "World", "Hehehe"];
  useEffect(() => {
    axios
      .get("https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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
  //   const selectedItem = (item) => {
  //     ///
  //   };
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      {items.map((item, index) => (
        <ColorButton key={index}>{item}</ColorButton>
      ))}
    </ButtonGroup>
  );
}
