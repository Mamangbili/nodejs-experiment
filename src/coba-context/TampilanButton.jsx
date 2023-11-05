import { useContext } from "react";
import { angkaContext } from "./angkaContext";
import TampilanLevel3 from "./tampilan2";

const TampilanBtn = () => {
  const { angka } = useContext(angkaContext);
  return (
    <>
      <div>{angka}</div>
      <TampilanLevel3 />
    </>
  );
};

export default TampilanBtn;
 