import { useContext } from "react";
import { angkaContext } from "./angkaContext";

const TampilanLevel3 = () => {
  const { angka } = useContext(angkaContext);
  return (
    <>
      <div>ini level 3 = {angka}</div>
    </>
  );
};

export default TampilanLevel3;
