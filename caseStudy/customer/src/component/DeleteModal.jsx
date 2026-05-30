import { Modal, Button } from "react-bootstrap";
import { deleteCustomer } from "../service/customerService";

function DeleteModal({
                         show,
                         handleClose,
                         customer,
                         reloadData
                     }) {

    const handleDelete = async () => {

        await deleteCustomer(customer.id);

        reloadData();

        handleClose();
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Xóa Khách Hàng
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                Bạn có chắc muốn xóa khách hàng:

                <strong className="text-danger">
                    {" "}{customer?.name}
                </strong>

                ?

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={handleClose}
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