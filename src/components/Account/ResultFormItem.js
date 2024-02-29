import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    let { listAccount, handleDelete, handleEdit } = props;

    const handleButtonDelete = (accountId) => {
        const updateAccount = listAccount.filter(
            (account) => account.id !== accountId
        );
        localStorage.setItem("listAccount", JSON.stringify(updateAccount));

        handleDelete();
    };

    if (listAccount) {
        let items = listAccount.map((account, index) => {
            return (
                <tr key={index}>
                    <td>{account.id}</td>
                    <td>{account.email}</td>
                    <td>{account.username}</td>
                    <td>{account.fullname}</td>
                    <td>{account.department}</td>
                    <td>{account.position}</td>
                    <td>{account.createDate}</td>
                    <td>
                        <Button
                            color='warning'
                            onClick={() => handleEdit(account.id)}
                        >
                            Edit
                        </Button>
                    </td>
                    <td>
                        <Button
                            color='warning'
                            onClick={() => handleButtonDelete(account.id)}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
        return items;
    }
}

export default ResultFormItem;
