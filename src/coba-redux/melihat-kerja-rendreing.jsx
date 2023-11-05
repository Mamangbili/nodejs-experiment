import { configureStore } from "@reduxjs/toolkit";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const textReducer = (state = "default", action) => {
  switch (action.type) {
    case "change":
      return action.payload;
    default:
      return state;
  }
};

const textStoreReducer = (state = [], action) => {
  if (action.type === "add") return [...state, action.payload];
  else return state;
};

const store = configureStore({
  reducer: { text: textReducer, storeText: textStoreReducer },
});

const CobaRedux = () => {
  const [text, setText] = useState("");
  return (
    <>
      {/* ini akan merender keseluruhan body component di dalamnya */}
      <input
        style={{ margin: "10px" }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Provider store={store}>
        {/* state mutate */}
        <Input />
        {/* state mutate mempengaruhi ini */}
        <Paragraph />
        {/* yg ini ga render ulang karena tidak memakai statenya meskipun dalam satu provider*/}
        <TidakRenderUlang>
          {" "}
          <ChildNonReduxDariParentYgPakeRedux />
        </TidakRenderUlang>
        <ChildNonReduxDariParentYgPakeRedux />
      </Provider>
    </>
  );
};

const Input = () => {
  const  text   = useSelector((state) => 
     state.text
  );
  const storeText = useSelector(state => state.storeText)
  const dispatch = useDispatch();
  console.log(storeText);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
      />
      <div className="flex ">
        <button
          style={{ border: "1px solid black" }}
          onClick={(e) => dispatch({ type: "add", payload: text })}>
          tambah text
        </button>

        <p>ini storeText :  {storeText}</p>
      </div>
    </>
  );
};

const Paragraph = () => {
  const text = useSelector((state) => state.text);
  return <p>state adalah : {text}</p>;
};

const TidakRenderUlang = ({ children }) => {
  const text = useSelector((state) => state.text);
  return (
    <>
      <p>
        Component ini tidak render ulang mesikupan input berubah dalam satu
        provider
      </p>
      {children}
    </>
  );
};

const ChildNonReduxDariParentYgPakeRedux = () => {
  return (
    <p>ini chlild polos yg tidak kena render meskipun parent render ulang</p>
  );
};
export default CobaRedux;
