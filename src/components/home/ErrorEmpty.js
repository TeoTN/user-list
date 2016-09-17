import React from 'react';
const ErrorEmpty = () => {
    return (
        <tr key="loading">
            <td colSpan="6">
                <span className="text-danger"> Users matching criteria were not found </span>
            </td>
        </tr>
    )
};
export default ErrorEmpty;