import React from "react";
import { Table, Container } from "reactstrap";
import ResultFormItem from "./ResultFormItem";

function ResultForm(props) {
    let { listAccount, handleDelete, handleEdit } = props;

    return (
        <Container>
            <br />
            <h3>Danh sách Account</h3>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Full Name</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Create Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultFormItem
                        listAccount={listAccount}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                </tbody>
            </Table>
        </Container>
    );
}

export default ResultForm;
