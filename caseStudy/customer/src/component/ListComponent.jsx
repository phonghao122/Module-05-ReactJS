import { useEffect, useState } from "react";
import { getAllCustomers } from "../service/customerService";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

function ListComponent() {

    const [customers, setCustomers] = useState([]);
    const [showModal, setShowModal] =
        useState(false);

    const [deleteCustomer, setDeleteCustomer] =
        useState({});

    const [searchName, setSearchName] = useState("");

    const [searchStatus, setSearchStatus] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 2;

    const handleOpenDeleteModal = (
        customer
    ) => {

        setDeleteCustomer(customer);

        setShowModal(true);
    };

    const handleCloseModal = () => {

        setShowModal(false);
    };

    const loadData = async () => {

        const data =
            await getAllCustomers();

        setCustomers(data);
    };

    useEffect(() => {

        loadData();

    }, []);

    const filteredCustomers = customers.filter((customer) => {

        const matchName =
            customer.name
                .toLowerCase()
                .includes(searchName.toLowerCase());

        const matchStatus =
            searchStatus === "" ||
            customer.status === searchStatus;

        return matchName && matchStatus;
    });

    const totalPages = Math.ceil(
        filteredCustomers.length / itemsPerPage
    );

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const currentCustomers =
        filteredCustomers.slice(
            startIndex,
            startIndex + itemsPerPage
        );

    return (
        <>
            <div className="container mt-4">

                <div className="card shadow">

                    {/* Header */}
                    <div className="card-header furama-header">

                        <div className="d-flex justify-content-between align-items-center">

                            <h3 className="mb-0">
                                🏨 Danh Sách Khách Hàng
                            </h3>

                            <Link
                                to="/customers/create"
                                className="btn btn-warning fw-bold"
                            >
                                + Thêm Khách Hàng
                            </Link>

                        </div>

                    </div>

                    {/* Body */}
                    <div className="card-body">

                        {/* Search */}
                        <div className="row mb-3">

                            <div className="col-md-6">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm theo tên khách hàng..."
                                    value={searchName}
                                    onChange={(e) => {
                                        setSearchName(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />

                            </div>

                            <div className="col-md-3">

                                <select
                                    className="form-select"
                                    value={searchStatus}
                                    onChange={(e) => {
                                        setSearchStatus(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <option value="">
                                        Tất cả trạng thái
                                    </option>

                                    <option value="Đang ở">
                                        Đang ở
                                    </option>

                                    <option value="Đã trả phòng">
                                        Đã trả phòng
                                    </option>

                                </select>

                            </div>

                        </div>

                        {/* Table */}
                        <table className="table table-hover align-middle">

                            <thead className="table-light">
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Khách Hàng</th>
                                <th>Phòng</th>
                                <th>Ngày Nhận Phòng</th>
                                <th>Trạng Thái</th>
                                <th className="text-center">
                                    Hành Động
                                </th>
                            </tr>
                            </thead>

                            <tbody>

                            {currentCustomers.map((customer, index) => (

                                <tr key={customer.id}>
                                    <td>
                                        {startIndex + index + 1}
                                    </td>

                                    <td>{customer.id}</td>

                                    <td>{customer.name}</td>

                                    <td>{customer.room}</td>

                                    <td>{customer.checkIn}</td>

                                    <td>
                                        {customer.status === "Đang ở" ? (
                                            <span className="badge bg-success">
                                            Đang ở
                                        </span>
                                        ) : (
                                            <span className="badge bg-secondary">
                                            Đã trả phòng
                                        </span>
                                        )}
                                    </td>

                                    <td>

                                        <div className="d-flex justify-content-center gap-2">

                                            <Link
                                                to={`/customers/edit/${customer.id}`}
                                                className="btn btn-outline-warning btn-sm"
                                            >
                                                Sửa
                                            </Link>

                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() =>
                                                    handleOpenDeleteModal(customer)
                                                }
                                            >
                                                Xóa
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                            </tbody>

                        </table>
                        <div className="d-flex justify-content-center mt-3">

                            <nav>

                                <ul className="pagination">

                                    <li
                                        className={`page-item ${
                                            currentPage === 1
                                                ? "disabled"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                setCurrentPage(
                                                    currentPage - 1
                                                )
                                            }
                                        >
                                            Previous
                                        </button>
                                    </li>

                                    {[...Array(totalPages)].map(
                                        (_, index) => (
                                            <li
                                                key={index}
                                                className={`page-item ${
                                                    currentPage ===
                                                    index + 1
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() =>
                                                        setCurrentPage(
                                                            index + 1
                                                        )
                                                    }
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        )
                                    )}

                                    <li
                                        className={`page-item ${
                                            currentPage === totalPages
                                                ? "disabled"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                setCurrentPage(
                                                    currentPage + 1
                                                )
                                            }
                                        >
                                            Next
                                        </button>
                                    </li>

                                </ul>

                            </nav>

                        </div>

                    </div>

                </div>

            </div>
            <DeleteModal
                show={showModal}
                handleClose={handleCloseModal}
                customer={deleteCustomer}
                reloadData={loadData}
            />
        </>
    );
}

export default ListComponent;