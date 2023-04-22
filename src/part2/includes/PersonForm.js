const PersonForm = ({
  addNewName,
  getNewName,
  newName,
  getNewNumber,
  newNumber,
}) => {
  return (
    <>
      <form onSubmit={addNewName}>
        <div>
          name: <input onChange={getNewName} value={newName} />
          <br />
          <br />
          number: <input onChange={getNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit"> Add </button>
        </div>
      </form>
    </>
  );
};
export default PersonForm;
