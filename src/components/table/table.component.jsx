import "./table.styles.css";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ id, gender, birthDate, patientName, phone, city }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{patientName}</td>
              <td>{gender}</td>
              <td>{birthDate}</td>
              <td>{city}</td>
              <td>{phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
