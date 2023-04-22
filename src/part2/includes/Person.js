const Person = ({ filterPerson, deletePerson }) => {
  return (
    <>
      <p>
        {filterPerson.name}: {filterPerson.number} --
        <button onClick={deletePerson}>Delete</button>
      </p>
    </>
  );
};
export default Person;
