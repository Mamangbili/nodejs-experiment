import { useContext } from "react";
import { angkaContext } from "./angkaContext";

const Button = () => {
  const { angka, setAngka } = useContext(angkaContext);
  const tambahHandler = () => {
    setAngka(angka + 1);
  };
  return (
    <>
      <button className="bg-lime-900" onClick={tambahHandler}>
        Tambah
      </button>
    </>
  );
};

export default Button;
