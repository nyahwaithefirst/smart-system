export default function Blog () {
    return (
          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Latest Insights</h5>
                    <h1 className="mb-0">Read the Latest Articles on Compliance, KYC & Financial Crime</h1>
                </div>
                <div className="row g-5">
                    {/* Blog Post 1 */}
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/assets/img/blog-1.jpg" alt="Name Screening Best Practices" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Compliance</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Jane Smith</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>15 Oct, 2025</small>
                                </div>
                                <h4 className="mb-3">Best Practices for Name Screening and Watchlist Management</h4>
                                <p>Learn how to efficiently screen individuals against sanctions, PEPs, and watchlists to stay compliant and reduce risk.</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/assets/img/blog-2.jpg" alt="Transaction Monitoring" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Fraud Detection</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Michael Lee</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>20 Oct, 2025</small>
                                </div>
                                <h4 className="mb-3">Real-Time Transaction Monitoring for Fraud Prevention</h4>
                                <p>Explore how modern transaction monitoring dashboards detect suspicious activities and reduce financial crime risks.</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/assets/img/blog-3.jpg" alt="KYC & Risk Profiling" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">KYC/KYB</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Linda Carter</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>25 Oct, 2025</small>
                                </div>
                                <h4 className="mb-3">Comprehensive KYC & Risk Profiling Strategies</h4>
                                <p>Discover how to leverage identity verification, social media profiling, and credit checks to reduce client risk and comply with regulations.</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}