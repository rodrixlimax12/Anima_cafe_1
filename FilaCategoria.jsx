import React from 'react';

const FilaCategoria = ({ categoria }) => {
  return (
    <tr>
      <td colSpan="3" style={{ fontWeight: 'bold' }}>{categoria}</td>
    </tr>
  );
};

export default FilaCategoria;
