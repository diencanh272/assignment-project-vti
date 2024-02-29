import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../components/Account/CreateButton";
import ResultForm from "../components/Account/ResultForm";
import ModalFormCreateAccount from "../components/Account/CreateNewAccount/ModalFormCreateAccount";

function AccountContainer(props) {
    let [listAccount, setListAccount] = useState([]);
    let [showForm, setShowForm] = useState(false);

    let onHandleCreateButton = () => {
        setShowForm(true);
    };

    let onHandleCloseModal = () => {
        setShowForm(false);
    };

    let onHandleCreateNewAccount = (accountNew) => {
        // console.log("accountNew: ", accountNew);
        listAccount.push(accountNew);
        // Set lại state listAccount
        setListAccount(listAccount);
        // Lưu dữ liệu vào LocalStorage
        localStorage.setItem("listAccount", JSON.stringify(listAccount));
        // Thực hiện đóng Form sau khi thêm mới
        setShowForm(false);
    };

    let handleDelete = () => {
        setListAccount(JSON.parse(localStorage.getItem("listAccount")));
    };

    let handleEdit = (accountEdit) => {
        setShowForm(true);
        const editAccount = listAccount.filter(
            (account) => account.id === accountEdit
        );
        return editAccount;
        // console.log(editAccount);
        // console.log(listAccount);
    };

    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            let listAccountLocalStorage = JSON.parse(
                localStorage.getItem("listAccount")
            );
            setListAccount(listAccountLocalStorage);
        }
    }, []);

    return (
        <Container>
            {/* Nút thêm mới */}

            <CreateButton onHandleCreateButton={onHandleCreateButton} />

            {/*Modal Form */}
            <ModalFormCreateAccount
                showForm={showForm}
                closeModal={onHandleCloseModal}
                onHandleCreateNewAccount={onHandleCreateNewAccount}
                handleEdit={handleEdit}
            />

            {/* Form kết quả */}
            <ResultForm
                listAccount={listAccount}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </Container>
    );
}

export default AccountContainer;
