import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions";

const Swapi = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>
        Get info
      </button>

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Swapi; 