function Box({ name, id, handleClick, type, number }) {
  return (
    <div
      className="box"
      type="button"
      onClick={() => handleClick({ type, id })}
    >
      <div>
        {name} {number}
      </div>
    </div>
  );
}

export default Box;
