import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const onSubmit = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        className="AddToList-input"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image url"
        value={input.img}
        className="AddToList-input"
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        value={input.note}
        className="AddToList-input"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={onSubmit}>
        Add To the List
      </button>
    </div>
  );
};
export default AddToList;
