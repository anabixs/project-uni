import { useParams } from "react-router-dom";

const Repair = () => {
  const modelName = useParams();
  console.log(modelName);
  return (
    <div>
      <h2>Details for {modelName.id}</h2>
      {/* Добавьте здесь подробности модели */}
    </div>
  );
};

export default Repair;
