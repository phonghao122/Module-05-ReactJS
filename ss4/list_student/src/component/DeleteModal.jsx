import React from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteStudent } from "../service/studentService.js";

function DeleteModal({
                         isShow,
                         closeModal,
                         student,
                         setReloading
                     }) {

    const handleDelete = () => {

        deleteStudent(student.id);

        setReloading(prev => !prev);

        closeModal();
    };

    return (
        <Modal
            show={isShow}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Xóa sinh viên
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Bạn có chắc muốn xóa sinh viên:

                <strong>
                    {" "}{deleteStudent.name}
                </strong>
                ?
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={closeModal}
                >
                    Hủy
                </Button>

                <Button
                    variant="danger"
                    onClick={handleDelete}
                >
                    Xóa
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;