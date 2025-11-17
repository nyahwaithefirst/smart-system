import React from "react";
import About from "../component/home/about/about";
import Blog from "../component/home/blog/blog";
import Facts from "../component/home/Facts/Facts";
import Feature from "../component/home/feature/feature";
import Footer from "../component/home/footer/footer";
import FullScreenStart from "../component/home/fullScreenSearchStart/fullScreenSearchStart";
import Nav from "../component/home/nav/nav";
import PricingPlan from "../component/home/pricingPlan/pricingPlan";
import Quote from "../component/home/qoute/quote";
import Service from "../component/home/service/service";
import Spinner from "../component/home/spinner/spinner";
import Team from "../component/home/team/team";
import TopBar from "../component/home/topbar/topbar";

export default function Home () {
    return (
        <React.Fragment>
            {/* <Spinner /> */}
            <TopBar />
            <Nav />
            <FullScreenStart />
            <Facts />
            <About />
            <Feature />
            <Service />
            <PricingPlan />
            <Quote />
            <Team />
            <Blog />
            <Footer />
        </React.Fragment>
    )
} 