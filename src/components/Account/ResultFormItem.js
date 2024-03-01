import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    let { listAccount, handleDelete, handleEdit } = props;

    let handleButtonDelete = (accountId) => {
        let updateAccount = listAccount.filter(
            (account) => account.id !== accountId
        );
        localStorage.setItem("listAccount", JSON.stringify(updateAccount));

        handleDelete();
    };

    let handleButtonEdit = (accountEdit) => {
        let getAccountEdit = listAccount.filter(
            (acc) => acc.id === accountEdit
        );

        handleEdit(getAccountEdit);
        // console.log(getAccountEdit);
    };

    if (listAccount) {
        let items = listAccount.map((account, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{account.email}</td>
                    <td>{account.username}</td>
                    <td>{account.fullname}</td>
                    <td>{account.department}</td>
                    <td>{account.position}</td>
                    <td>{account.createDate}</td>
                    <td>
                        <Button
                            color='warning'
                            onClick={() => handleButtonEdit(account.id)}
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
