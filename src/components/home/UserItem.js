import React from 'react';
const UserItem = ({user, model, highlight}) => {
    return (
        <tr className={highlight?'selected':''}>
            {
                Object.entries(model).map(
                    ([key, label]) => <td key={key}>{user[key]}</td>
                )
            }
        </tr>
    )
};
export default UserItem;