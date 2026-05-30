import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../assets/css/form.css"

import {
    findById,
    updateCustomer
} from "../service/customerService";

function EditComponent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [customer, setCustomer] = useState(null);

    useEffect(() => {

        const loadCustomer = async () => {

            const data = await findById(id);

            setCustomer(data);
        };

        loadCustomer();

    }, [id]);

    const validationSchema = Yup.object({

        name: Yup.string()
            .required("Tên khách hàng không được để trống"),

        room: Yup.string()
            .required("Số phòng không được để trống"),

        checkIn: Yup.string()
            .required("Ngày nhận phòng không được để trống"),

        status: Yup.string()
            .required("Trạng thái không được để trống")
    });

    const handleSubmit = async (values) => {

        await updateCustomer(id, values);

        navigate("/customers");
    };

    if (!customer) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-warning"></div>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0">

                        <div className="card-header furama-header">

                            <h3 className="mb-0 text-center">
                                ✏️ Cập Nhật Khách Hàng
                            </h3>

                        </div>

                        <div className="card-body p-4">

                            <Formik
                                initialValues={customer}
                                enableReinitialize={true}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Họ và Tên
                                        </label>

                                        <Field
                                            type="text"
                                            name="name"
                                            className="form-control"
                                        />

                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-danger"
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Số Phòng
                                        </label>

                                        <Field
                                            type="text"
                                            name="room"
                                            className="form-control"
                                        />

                                        <ErrorMessage
                                            name="room"
                                            component="div"
                                            className="text-danger"
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Ngày Nhận Phòng
                                        </label>

                                        <Field
                                            type="date"
                                            name="checkIn"
                                            className="form-control"
                                        />

                                        <ErrorMessage
                                            name="checkIn"
                                            component="div"
                                            className="text-danger"
                                        />

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label">
                                            Trạng Thái
                                        </label>

                                        <Field
                                            as="select"
                                            name="status"
                                            className="form-select"
                                        >
                                            <option value="Đang ở">
                                                Đang ở
                                            </option>

                                            <option value="Đã trả phòng">
                                                Đã trả phòng
                                            </option>
                                        </Field>

                                        <ErrorMessage
                                            name="status"
                                            component="div"
                                            className="text-danger"
                                        />

                                    </div>

                                    <div className="d-flex justify-content-end gap-2">

                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() =>
                                                navigate("/customers")
                                            }
                                        >
                                            Hủy
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-warning fw-bold"
                                        >
                                            Lưu Thay Đổi
                                        </button>

                                    </div>

                                </Form>
                            </Formik>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EditComponent;