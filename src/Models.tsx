import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
export default function Models() {
  const items = ["lol", "kek", "cheburek"];
  //   const selectedItem = (item) => {
  //     ///
  //   };
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      {items.map((item, index) => (
        <Button key={index}>{item}</Button>
      ))}
    </ButtonGroup>
  );
}
