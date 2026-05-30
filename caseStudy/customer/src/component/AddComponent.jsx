import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "../service/customerService";
import "../assets/css/form.css"

function AddComponent() {

    const navigate = useNavigate();

    const initialValues = {
        name: "",
        room: "",
        checkIn: "",
        status: "Đang ở"
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Tên khách hàng không được để trống"),

        room: Yup.string()
            .required("Số phòng không được để trống"),

        checkIn: Yup.date()
            .required("Vui lòng chọn ngày nhận phòng"),

        status: Yup.string()
            .required("Vui lòng chọn trạng thái")
    });

    const handleSubmit = async (values) => {

        await addCustomer(values);

        navigate("/customers");
    };

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0">

                        <div className="card-header furama-header">
                            <h3 className="text-center mb-0">
                                🏨 Thêm Khách Hàng Mới
                            </h3>
                        </div>

                        <div className="card-body p-4">

                            <Formik
                                initialValues={initialValues}
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
                                            className="text-danger mt-1"
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
                                            className="text-danger mt-1"
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
                                            className="text-danger mt-1"
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
                                            className="text-danger mt-1"
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
                                            Thêm Khách Hàng
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

export default AddComponent;