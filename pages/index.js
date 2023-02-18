import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Testimonial from "../components/slider/Testimonial";
import Typewriter from "typewriter-effect";
import section1 from "../components/src/section1";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
