import {
    useNavigate,
    useParams
} from "react-router-dom";

import React, {
    useEffect,
    useState
} from "react";

import {
    findById,
    updateStudent
} from "../service/studentService.js";

function EditComponent() {

    const { id } =
        useParams();

    const navigate =
        useNavigate();

    const [student,
        setStudent] =
        useState({
            name: ""
        });

    useEffect(() => {

        const data =
            findById(id);

        if (data) {
            setStudent(data);
        }

    }, [id]);

    const handleChange =
        (event) => {

            const {
                name,
                value
            } = event.target;

            setStudent(prev => ({
                ...prev,
                [name]: value
            }));
        };

    const handleEditStudent =
        () => {

            updateStudent(
                id,
                student
            );

            navigate("/list");
        };

    return (
        <div className="row mb-4">

            <div className="col">
                <input
                    type="text"
                    name="name"
                    placeholder="Tên sinh viên"
                    className="form-control"
                    defaultValue={student.name}
                    onChange={handleChange}
                />
            </div>

            <div className="col">
                <input
                    type="number"
                    name="age"
                    placeholder="Tuổi"
                    className="form-control"
                    defaultValue={student.age}
                    onChange={handleChange}
                />
            </div>

            <div className="col">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    defaultValue={student.email}
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
                    defaultValue={student.score}
                    onChange={handleChange}
                />
            </div>

            <div className="col-auto">
                <button
                    className="btn btn-success"
                    onClick={handleEditStudent}
                >
                    Lưu
                </button>
            </div>

        </div>
    );
}

export default EditComponent;