import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/home.css";

function HomeComponent() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section text-white d-flex align-items-center">
                <div className="container text-center">
                    <h1 className="display-3 fw-bold">
                        Furama Resort Đà Nẵng
                    </h1>

                    <p className="lead">
                        Khu nghỉ dưỡng 5 sao hàng đầu Việt Nam
                    </p>

                    <button className="btn btn-warning btn-lg mt-3">
                        Đặt Phòng Ngay
                    </button>
                </div>
            </section>

            {/* About */}
            <section className="container py-5">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                            alt="hotel"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-md-6">
                        <h2 className="fw-bold">
                            Chào mừng đến Furama Resort
                        </h2>

                        <p className="text-muted">
                            Furama Resort Đà Nẵng là khu nghỉ dưỡng
                            sang trọng với bãi biển riêng, hồ bơi,
                            spa cao cấp và hệ thống phòng nghỉ hiện đại.
                        </p>

                        <button className="btn btn-primary">
                            Tìm Hiểu Thêm
                        </button>
                    </div>

                </div>
            </section>

            {/* Services */}
            <section className="bg-light py-5">
                <div className="container">

                    <h2 className="text-center mb-5">
                        Dịch Vụ Nổi Bật
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 shadow">
                                <div className="card-body text-center">
                                    <h3>🏨</h3>
                                    <h5>Phòng Cao Cấp</h5>
                                    <p>
                                        Không gian sang trọng,
                                        đầy đủ tiện nghi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow">
                                <div className="card-body text-center">
                                    <h3>🍽️</h3>
                                    <h5>Nhà Hàng</h5>
                                    <p>
                                        Ẩm thực Á - Âu đẳng cấp.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow">
                                <div className="card-body text-center">
                                    <h3>🏊</h3>
                                    <h5>Hồ Bơi & Spa</h5>
                                    <p>
                                        Thư giãn và tận hưởng kỳ nghỉ.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Gallery */}
            <section className="container py-5">

                <h2 className="text-center mb-4">
                    Hình Ảnh Resort
                </h2>

                <div className="row g-3">

                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
                            className="img-fluid rounded shadow"
                            alt=""
                        />
                    </div>

                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
                            className="img-fluid rounded shadow"
                            alt=""
                        />
                    </div>

                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
                            className="img-fluid rounded shadow"
                            alt=""
                        />
                    </div>

                </div>

            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <h5>Furama Resort Đà Nẵng</h5>
                <p>
                    103 Võ Nguyên Giáp, Đà Nẵng
                </p>
            </footer>
        </>
    );
}

export default HomeComponent;