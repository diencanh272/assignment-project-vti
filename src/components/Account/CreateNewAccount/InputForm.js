import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { generateId } from "../../../until/helpers/generateId";
import { getNowDate } from "../../../until/helpers/getNowDate";

function InputForm(props) {
    // Gọi lại các props từ bên trên truyền xuống
    let { onHandleCreateNewAccount } = props;
    // Khai báo State lưu trữ giá trị của các ô nhập liệu
    let [Email, SetEmail] = useState("");
    let [Username, SetUsername] = useState("");
    let [Fullname, SetFullname] = useState("");
    let [Department, SetDepartment] = useState("");
    let [Position, SetPosition] = useState("");
    // Hàm xử lý khi click vào nút Create
    let handleCreate = () => {
        let accountNew = {
            id: generateId(),
            email: Email,
            username: Username,
            fullname: Fullname,
            department: Department,
            position: Position,
            createDate: getNowDate(),
        };
        // console.log("accountNew: ", accountNew);
        onHandleCreateNewAccount(accountNew);
    };

    let handleReset = () => {
        // Set lại State các ô nhập liệu về ""
        SetEmail("");
        SetUsername("");
        SetFullname("");
    };

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for='Email'>Email: </Label>
                    <Input
                        id='Email'
                        name='Email'
                        placeholder='Input Email'
                        type='email'
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
            <Button color='primary' onClick={handleCreate}>
                Create
            </Button>
            <Button color='danger' onClick={handleReset}>
                Reset
            </Button>
        </Container>
    );
}

export default InputForm;
