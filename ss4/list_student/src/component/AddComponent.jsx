import React, { useRef } from "react";
import { addStudent } from "../service/studentService.js";
import { useNavigate } from "react-router-dom";

function AddComponent() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const ageRef = useRef(null);
    const scoreRef = useRef(null);

    const navigate = useNavigate();

    const handleAddNewStudent = () => {

        const student = {
            name: nameRef.current.value,
            age: Number(
                ageRef.current.value
            ),
            email:
            emailRef.current.value,
            score: Number(
                scoreRef.current.value
            )
        };

        // validate
        if (
            student.name.trim() === "" ||
            student.email.trim() === ""||
            student.score <= 0 ||
            student.score > 10 ||
            student.age <= 0 ||
            student.age > 50
        ) {
            alert(
                "Vui lòng nhập đầy đủ và chính xác thông tin"
            );
            return;
        }

        addStudent(student);

        navigate("/list");
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                Add Student
            </h2>

            <div className="row g-2">

                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Tên sinh viên"
                        className="form-control"
                        ref={nameRef}
                    />
                </div>

                <div className="col-md-2">
                    <input
                        type="number"
                        placeholder="Tuổi"
                        className="form-control"
                        ref={ageRef}
                    />
                </div>

                <div className="col-md-3">
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        ref={emailRef}
                    />
                </div>

                <div className="col-md-2">
                    <input
                        type="number"
                        step="0.1"
                        placeholder="Điểm"
                        className="form-control"
                        ref={scoreRef}
                    />
                </div>

                <div className="col-md-2">
                    <button
                        type="button"
                        className=
                            "btn btn-success w-100"
                        onClick={
                            handleAddNewStudent
                        }
                    >
                        Thêm
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AddComponent;