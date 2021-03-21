import React from 'react';

const Laptop = ({laptop}) => {
    const {marca, procesador, ram} = laptop;
    return (
        <tr>
            <td>{marca}</td>
            <td>{procesador}</td>
            <td>{ram}</td>
        </tr>
    );
};

export default Laptop;
