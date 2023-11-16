export default function Models() {
  const items = ["lol", "kek", "cheburek"];
  //   const selectedItem = (item) => {
  //     ///
  //   };
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
