import React, { useEffect, useState } from "react";
import {
    getAll,
    save
} from "../service/studentService.js";

import DeleteModal from "./DeleteModal.jsx";

const ListComponent = () => {

    const [deleteStudent, setDeleteStudent] =
        useState({
            id: "",
            name: ""
        });

    const [studentList, setStudentList] =
        useState([]);

    const [isShowModal, setIsShowModal] =
        useState(false);

    const [reloading, setReloading] =
        useState(false);

    const [student, setStudent] =
        useState({
            name: "",
            age: "",
            email: "",
            score: ""
        });

    useEffect(() => {
        setStudentList([...getAll()]);
    }, [reloading]);

    const closeModal = () => {
        setIsShowModal(false);
    };

    const handleOpenModal = (student) => {
        setIsShowModal(true);
        setDeleteStudent(student);
    };

    const handleChange = (event) => {
        const { name, value } =
            event.target;

        setStudent(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdd = () => {

        if (
            student.name.trim() === "" ||
            student.age === "" ||
            student.email.trim() === "" ||
            student.score === ""
        ) {
            alert("Vui lòng nhập đầy đủ");
            return;
        }

        save({
            ...student,
            age: Number(student.age),
            score: Number(student.score)
        });

        setStudent({
            name: "",
            age: "",
            email: "",
            score: ""
        });

        setReloading(prev => !prev);
    };

    return (
        <>
            <h1>Danh sách sinh viên</h1>

            <div className="row mb-4">

                <div className="col">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên sinh viên"
                        className="form-control"
                        value={student.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="col">
                    <input
                        type="number"
                        name="age"
                        placeholder="Tuổi"
                        className="form-control"
                        value={student.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="col">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={student.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="col">
                    <input
                        type="number"
                        step="0.1"
                        name="score"
                        placeholder="Điểm"
                        className="form-control"
                        value={student.score}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-auto">
                    <button
                        className="btn btn-success"
                        onClick={handleAdd}
                    >
                        Thêm
                    </button>
                </div>

            </div>

            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Email</th>
                    <th>Điểm</th>
                    <th>Xoá</th>
                </tr>
                </thead>

                <tbody>
                {studentList.map((student, i) => (
                    <tr key={student.id}>
                        <td>{i + 1}</td>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.email}</td>
                        <td>{student.score}</td>

                        <td>
                            <button
                                onClick={() =>
                                    handleOpenModal(student)
                                }
                                className="btn btn-sm btn-danger"
                            >
                                Xoá
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <DeleteModal
                deleteStudent={deleteStudent}
                isShow={isShowModal}
                closeModal={closeModal}
                setReloading={setReloading}
            />
        </>
    );
}

export default ListComponent;