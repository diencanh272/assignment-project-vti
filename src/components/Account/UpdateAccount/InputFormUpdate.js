import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getNowDate } from "../../../until/helpers/getNowDate";

function InputFormUpdate(props) {
    let { handleUpdate, account } = props;
    // Khai báo State lưu trữ giá trị của các ô nhập liệu

    let [Email, SetEmail] = useState(account[0].email);
    let [Username, SetUsername] = useState(account[0].username);
    let [Fullname, SetFullname] = useState(account[0].fullname);
    let [Department, SetDepartment] = useState(account[0].department);
    let [Position, SetPosition] = useState(account[0].position);

    // console.log(account);

    let handleReset = () => {
        // Set lại State các ô nhập liệu về ""
        SetEmail("");
        SetUsername("");
        SetFullname("");
    };

    let handleUpdateClick = () => {
        // Gọi hàm handleUpdate để cập nhật tài khoản trong localStorage
        let updatedAccount = {
            id: account[0].id,
            email: Email,
            username: Username,
            fullname: Fullname,
            department: Department,
            position: Position,
            createDate: getNowDate(),
        };
        handleUpdate(updatedAccount);
    };
    // console.log(account[0].email);

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for='Email'>Email: </Label>
                    <Input
                        id='Email'
                        placeholder='Input Email'
                        type='text'
                        name='email'
                        value={Email}
                        onChange={(e) => {
                            SetEmail(e.target.value);
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for='Username'>User Name: </Label>
                    <Input
                        id='Username'
                        name='Username'
                        placeholder='Input Username'
                        type='text'
                        value={Username}
                        onChange={(e) => {
                            SetUsername(e.target.value);
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for='FullName'>Full Name: </Label>
                    <Input
                        id='FullName'
                        name='FullName'
                        placeholder='Input Full Name'
                        type='text'
                        value={Fullname}
                        onChange={(e) => {
                            SetFullname(e.target.value);
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for='Department'>Select a Department: </Label>
                    <Input
                        id='Department'
                        name='Department'
                        type='select'
                        value={Department}
                        onChange={(e) => {
                            SetDepartment(e.target.value);
                        }}
                    >
                        <option value={""}>--Choose Department--</option>
                        <option value={"Bảo vệ"}>Bảo vệ</option>
                        <option value={"Giám đốc"}>Giám đốc</option>
                        <option value={"Kỹ thuật"}>Kỹ thuật</option>
                        <option value={"Marketing"}>Marketing</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for='Position'>Select a Position: </Label>
                    <Input
                        id='Position'
                        name='Position'
                        type='select'
                        value={Position}
                        onChange={(e) => {
                            SetPosition(e.target.value);
                        }}
                    >
                        <option value={""}>--Choose Position--</option>
                        <option value={"Test"}>Test</option>
                        <option value={"Scrum_Master"}>Scrum_Master</option>
                        <option value={"PM"}>PM</option>
                    </Input>
                </FormGroup>
            </Form>
            <Button color='primary' onClick={handleUpdateClick}>
                Update
            </Button>
            <Button color='danger' onClick={handleReset}>
                Reset
            </Button>
        </Container>
    );
}

export default InputFormUpdate;
