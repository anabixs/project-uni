import Button, { ButtonProps } from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface ModelsProps {
  model1: string;
  model2: string;
  model3: string;
}
export default function Models({ model1, model2, model3 }: ModelsProps) {
  const items = [model1, model2, model3];

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
  const history = useNavigate();
  const handleModelClick = (modelName: string) => {
    history(`/project-uni/repair/${modelName}`);
  };
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      {items.map((item, index) => (
        <ColorButton key={index} onClick={() => handleModelClick(item)}>
          {item}
        </ColorButton>
      ))}
    </ButtonGroup>
  );
}
