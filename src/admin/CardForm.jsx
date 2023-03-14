import React from "react";
import { useDispatch } from "react-redux";
import { card } from "./admin";

export default function CardForm() {
  const dispatch = useDispatch();

  const intialise = { img: null, title: "", price: "", stars: null };

  const [formData, setFormData] = React.useState(intialise);

  function handleChange(event) {
    const {name, value, type} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "file" ? value.files[0] : value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(card(formData));
    setFormData(intialise);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        placeholder="img src"
        onChange={handleChange}
        name="img"
        value={formData.img}
      />
      <input
        type="text"
        placeholder="plat title"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <input
        type="text"
        placeholder="price"
        onChange={handleChange}
        name="price"
        value={formData.price}
      />
      <input
        type="file"
        placeholder="src stars"
        onChange={handleChange}
        name="stars"
        value={formData.stars}
      />

      <button>Add plate</button>
    </form>
  );
}
