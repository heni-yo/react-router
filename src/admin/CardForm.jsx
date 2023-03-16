import { useDispatch } from "react-redux";
import { card } from "./admin";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export default function CardForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin.test);
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm();

  return (
    <div className="container">
      <h3 className="form__title">Add Plate</h3>
      <div className="form__wrapper">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            dispatch(card(data));
            reset();
          })}
        >
          <div className="form__group">
            <input
              type="file"
              placeholder="img src"
              {...register("img", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="plat title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="file"
              placeholder="src stars"
              {...register("stars", { required: true })}
            />
          </div>
          <div className="form__group">
            <select id="category" {...register("category")}>
              <option value="" disabled>
                Choose Category
              </option>
              {state.map((props, i) => {
                return (
                  <option key={i} value={props.category}>
                    {props.category}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="btn primary-btn">Add plate</button>
        </form>
      </div>
    </div>
  );
            }

