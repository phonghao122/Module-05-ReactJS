import React, { useEffect, useState } from "react";
import { getAllStudents
} from "../service/studentService.js";

import DeleteModal from "./DeleteModal.jsx";
import {Link} from "react-router-dom";

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

    const [search, setSearch] =
        useState("");

    useEffect(() => {
        setStudentList([...getAllStudents()]);
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
    const handleSearch =
        (event) => {

            setSearch(
                event.target.value
            );
        };

    const filteredStudents =
        studentList.filter(
            (student) =>
                student.name
                    .toLowerCase()
                    .includes(
                        search
                            .toLowerCase()
                    )
        );

    return (
        <>
            <h1>Danh sách sinh viên</h1>

            <Link
                className=
                    "btn btn-success btn-sm"
                to="/create"
            >
                Add Student
            </Link>

            <div className="mt-3 mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder=
                        "Search by name..."
                    value={search}
                    onChange={
                        handleSearch
                    }
                />

            </div>

            <table
                className=
                    "table table-striped table-dark"
            >
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
                {filteredStudents.map(
                    (student, i) => (
                        <tr key={student.id}>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>{student.score}</td>

                            <td>
                                <Link
                                    to={`/edit/${student.id}`}
                                    className=
                                        "btn btn-warning btn-sm"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() =>
                                        handleOpenModal(
                                            student
                                        )
                                    }
                                    className=
                                        "btn btn-sm btn-danger"
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <DeleteModal
                student={deleteStudent}
                isShow={isShowModal}
                closeModal={closeModal}
                setReloading={setReloading}
            />
        </>
    );
}

export default ListComponent;