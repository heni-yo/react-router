import { useDispatch } from "react-redux";
import { category } from "./admin";
import { useForm } from 'react-hook-form';

import React from "react";

export default function CategoryForm() {
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  return (
    <div className="container">
      <h3 className="form__title">add category</h3>
      <div className="form__wrapper">
        <form onSubmit={handleSubmit(data => {dispatch(category(data));reset()})}>
          <div className="form__group">
            <input
              type="text"
              placeholder="Category Name"
              {...register("category",{ required: true })}
            />
          </div>
          <button className="btn primary-btn">Add category</button>
        </form>
      </div>
    </div>
  );
}
