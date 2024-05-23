/* eslint-disable react/prop-types */
import LinkButton from "./LinkButton";
import "../styles/error.css";

function NotFound({ error }) {
  const { data } = error;
  const { error: errorMsg } = data;

  return (
    <>
      <div className="error">
        <h1>Something went wrong</h1>
        <p>{errorMsg}</p>
        <LinkButton to="/">&larr; Go back</LinkButton>
      </div>
    </>
  );
}

export default NotFound;
