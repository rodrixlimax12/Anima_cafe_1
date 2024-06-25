import React from 'react';

const FilaProducto = ({ producto }) => {
  return (
    <tr>
      <td data-stock={producto.stock}>{producto.stock === 0 ? <s>{producto.nombre}</s> : producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
    </tr>
  );
};

export default FilaProducto;
