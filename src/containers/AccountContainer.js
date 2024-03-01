import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../components/Account/CreateButton";
import ResultForm from "../components/Account/ResultForm";
import ModalFormCreateAccount from "../components/Account/CreateNewAccount/ModalFormCreateAccount";
import ModalFormUpdate from "../components/Account/UpdateAccount/ModalFormUpdate";

function AccountContainer(props) {
    let [listAccount, setListAccount] = useState([]);
    let [showForm, setShowForm] = useState(false);
    let [showFormUpdate, setShowFormUpdate] = useState(false);
    let [selectAccountEdit, setSelectAccountEdit] = useState(null);

    let onHandleCreateButton = () => {
        setShowForm(true);
    };

    let onHandleCloseModal = () => {
        setShowForm(false);
    };

    let onHandleCloseModalUpdate = () => {
        setShowFormUpdate(false);
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

    let handleEdit = (account) => {
        setSelectAccountEdit(account);
        setShowFormUpdate(true);
        // console.log(account);
    };

    const handleUpdate = (updatedAccount) => {
        // Cập nhật tài khoản trong danh sách và lưu vào localStorage
        const updatedAccounts = listAccount.map((account) =>
            account.id === updatedAccount.id ? updatedAccount : account
        );
        setListAccount(updatedAccounts);
        localStorage.setItem("listAccount", JSON.stringify(updatedAccounts));
        setShowFormUpdate(false);
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
            />

            <ModalFormUpdate
                showFormUpdate={showFormUpdate}
                closeModalUpdate={onHandleCloseModalUpdate}
                account={selectAccountEdit}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
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
