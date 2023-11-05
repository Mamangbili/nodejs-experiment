import { createContext, useContext, useState } from "react";
import Button from "./Button";
import TampilanBtn from "./TampilanButton";

export const angkaContext = createContext("kosongan");
const style = {
  kotak: "w-32 h-52 bg-yellow-200",
};
function CobaContextApp() {
  const [angka, setAngka] = useState(0);
  const cobaFallBack = useContext(angkaContext)
  return (
    <>
      <angkaContext.Provider value={{ angka, setAngka }}>
        <Button />
        <div className={style.kotak}>habil testing awe</div>
        <TampilanBtn />
      </angkaContext.Provider>
      <div>ini fallback value : {cobaFallBack}</div>
    </>
  );
}
export default CobaContextApp;
