import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";

import InputForm from "./InputForm";

function ModalFormCreateAccount(props) {
    let { showForm, closeModal, onHandleCreateNewAccount, handleEdit } = props;

    let handleCloseModal = () => {
        closeModal();
    };

    return (
        <Container>
            <br />
            <Modal isOpen={showForm}>
                <ModalHeader>Create New Account</ModalHeader>
                <ModalBody>
                    <InputForm
                        onHandleCreateNewAccount={onHandleCreateNewAccount}
                        handleEdit={handleEdit}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={handleCloseModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default ModalFormCreateAccount;
