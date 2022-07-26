import React from "react";

function Forms() {
  const [male, setmale] = React.useState(false);
  const [female, setfemale] = React.useState(false);
  const radiohandlerfemale = () => {
    setfemale(!female);
    setmale(false);
  };
  const radiohandlermale = () => {
    setmale(!male);
    setfemale(false);
  };
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label>
        text:
        <input type="text" name="name" />
      </label>
      <label>
        num:
        <input type="number" name="name" />
      </label>
      <label>
        file:
        <input type="file" name="name" />
      </label>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>
          male:
          <input
            type="radio"
            name="male"
            checked={male}
            onClick={radiohandlermale}
          />
        </label>
        <label>
          female:
          <input
            type="radio"
            name="female"
            checked={female}
            onClick={radiohandlerfemale}
          />
        </label>
      </div>
      <input type="checkbox" />
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
      <input type="search" placeholder="search by name"/>
    </form>
  );
}

export default Forms;
