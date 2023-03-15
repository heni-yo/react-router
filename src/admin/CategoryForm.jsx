import { useState } from "react";
import { useDispatch } from "react-redux";
import { category } from "./admin";
import React from "react";

export default function CategoryForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(category(formData));
    setFormData("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category Name"
        onChange={(e) => {
          setFormData(e.target.value);
        }}
        value={formData}
      />

      <button>Add category</button>
    </form>
  );
}
