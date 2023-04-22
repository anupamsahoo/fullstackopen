const Filter = ({ filterByName }) => {
  return (
    <p>
      Filter By Name: <input onChange={filterByName} />
    </p>
  );
};
export default Filter;
