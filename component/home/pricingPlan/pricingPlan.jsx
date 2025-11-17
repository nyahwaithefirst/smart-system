export default function PricingPlan () {
    return (
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                    <h1 className="mb-0">We Offer Competitive Prices for Our Clients</h1>
                </div>
                <div className="row g-0">
                    {/* Basic Plan */}
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="bg-light rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary mb-1">Basic Plan</h4>
                                <small className="text-uppercase">For Small Businesses / Mass Market</small>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>49<small
                                        className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                                </h1>
                                <div className="d-flex justify-content-between mb-3"><span>Name Screening (Basic Watchlist & PEP)</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Transaction Screening (Basic Rules)</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Transaction Monitoring Dashboard (Limited)</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>KYC/KYB (ID & Address Verification)</span><i className="fa fa-times text-danger pt-1"></i></div>
                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Standard Plan */}
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="bg-white rounded shadow position-relative" style={{zIndex: "1"}}>
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary mb-1">Standard Plan</h4>
                                <small className="text-uppercase">For Medium Businesses / Compliance Users</small>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>99<small
                                        className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                                </h1>
                                <div className="d-flex justify-content-between mb-3"><span>Name Screening (Full Watchlist, PEP, Adverse Media)</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Transaction Screening & Monitoring</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>KYC/KYB (Full Profile & Risk Assessment)</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>Alert Management & Document Verification</span><i className="fa fa-times text-danger pt-1"></i></div>
                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Plan */}
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="bg-light rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary mb-1">Advanced Plan</h4>
                                <small className="text-uppercase">For Large Enterprises / Tech & Law Enforcement</small>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>199<small
                                        className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                                </h1>
                                <div className="d-flex justify-content-between mb-3"><span>Name Screening + Relationship Analysis & High Match Scoring</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Transaction Screening, Monitoring & Fraud Detection Rules</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>KYC/KYB (Full Suite + Credit Score & Adverse Media)</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>Alert Management, Escalation & Document Verification</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>Banking CRM Integration</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}