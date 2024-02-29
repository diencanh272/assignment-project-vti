import React from "react";
import { Container, Button } from "reactstrap";

function CreateButton(props) {
    let { onHandleCreateButton } = props;

    let handleCreateNewAccount = () => {
        onHandleCreateButton();
    };

    return (
        <Container>
            <br />
            <Button color='primary' onClick={handleCreateNewAccount}>
                Create New Account
            </Button>
        </Container>
    );
}

export default CreateButton;
