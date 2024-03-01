import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";

import InputFormUpdate from "./InputFormUpdate";

function ModalFormUpdate(props) {
    let {
        showFormUpdate,
        closeModalUpdate,
        handleEdit,
        handleUpdate,
        account,
    } = props;

    let handleCloseModalUpdate = () => {
        closeModalUpdate();
    };

    return (
        <Container>
            <br />
            <Modal isOpen={showFormUpdate}>
                <ModalHeader>Update Account</ModalHeader>
                <ModalBody>
                    <InputFormUpdate
                        handleEdit={handleEdit}
                        account={account}
                        handleUpdate={handleUpdate}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={handleCloseModalUpdate}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default ModalFormUpdate;
