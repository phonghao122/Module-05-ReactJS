import React, {useRef, useState} from "react";
import { addStudent } from "../service/studentService.js";
import { useNavigate } from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

function AddComponent() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const ageRef = useRef(null);
    const scoreRef = useRef(null);

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: 0,
        score: 0,
    });

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

    const handleSave = (value) => {
        addStudent(value);
        navigate("/list");
    }

    const handleValidate = yup.object({
        name: yup
            .string()
            .required("Không để trống"),

        email: yup
            .string()
            .email("Email không đúng định dạng")
            .required("Không để trống"),

        age: yup
            .number()
            .required("Không để trống")
            .min(18, "Tuổi phải từ 18 trở lên")
            .max(100, "Tuổi không hợp lệ"),

        score: yup
            .number()
            .required("Không để trống")
            .min(0, "Điểm tối thiểu là 0")
            .max(10, "Điểm tối đa là 10"),
    });

    return (
        // <div className="container mt-4">
        //
        //     <h2 className="mb-3">
        //         Add Student
        //     </h2>
        //
        //     <div className="row g-2">
        //
        //         <div className="col-md-3">
        //             <input
        //                 type="text"
        //                 placeholder="Tên sinh viên"
        //                 className="form-control"
        //                 ref={nameRef}
        //             />
        //         </div>
        //
        //         <div className="col-md-2">
        //             <input
        //                 type="number"
        //                 placeholder="Tuổi"
        //                 className="form-control"
        //                 ref={ageRef}
        //             />
        //         </div>
        //
        //         <div className="col-md-3">
        //             <input
        //                 type="email"
        //                 placeholder="Email"
        //                 className="form-control"
        //                 ref={emailRef}
        //             />
        //         </div>
        //
        //         <div className="col-md-2">
        //             <input
        //                 type="number"
        //                 step="0.1"
        //                 placeholder="Điểm"
        //                 className="form-control"
        //                 ref={scoreRef}
        //             />
        //         </div>
        //
        //         <div className="col-md-2">
        //             <button
        //                 type="button"
        //                 className=
        //                     "btn btn-success w-100"
        //                 onClick={
        //                     handleAddNewStudent
        //                 }
        //             >
        //                 Thêm
        //             </button>
        //         </div>
        //
        //     </div>
        //
        // </div>
        <Formik
            initialValues={student}
            onSubmit={handleSave}
            validationSchema={handleValidate}
        >
            <Form>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <div className="card shadow">
                                <div className="card-header bg-primary text-white">
                                    <h3 className="mb-0">
                                        Add Student
                                    </h3>
                                </div>

                                <div className="card-body">

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Name
                                        </label>

                                        <Field
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Nhập tên sinh viên"
                                        />

                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <Field
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Nhập email"
                                        />

                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Age
                                        </label>

                                        <Field
                                            type="number"
                                            name="age"
                                            className="form-control"
                                            placeholder="Nhập tuổi"
                                        />

                                        <ErrorMessage
                                            name="age"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Score
                                        </label>

                                        <Field
                                            type="number"
                                            name="score"
                                            className="form-control"
                                            placeholder="Nhập điểm"
                                            step="0.1"
                                        />

                                        <ErrorMessage
                                            name="score"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="d-flex gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                        >
                                            Add Student
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => navigate("/list")}
                                        >
                                            Back
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default AddComponent;