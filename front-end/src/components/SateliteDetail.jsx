const SateliteDetail = ({ satelite }) => {
  return (
    <tr>
      <td>{satelite.name}</td>
      <td>{satelite.density}</td>
      <td>{satelite.radius}</td>
      <td>{satelite.magnitude}</td>
    </tr>
  );
};

export default SateliteDetail;
