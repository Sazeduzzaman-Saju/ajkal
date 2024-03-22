import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageTitle title="গোপনীয়তা নীতি || Saptahik Ajkal" description="Text" />
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 english-font">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="fw-bold secondary-color">Contact Us</h1>
            </div>
            {/* Content In English */}
            <div className="pt-5">
              <h4 className="english-font">Head Office</h4>
              <p>
                Pragati Insurance Bhaban, 20-21, Karwan Bazar Dhaka 1215,
                Bangladesh
              </p>
              <ul>
                <li>
                  Office: <Link>02 55013430-33, 02 55012201-09</Link>
                </li>
                <li>
                  Advertisement: <Link>02 55012212</Link>
                </li>
                <li>
                  Fax: <Link>02 55012200, 02 55012211</Link>
                </li>
                <li>
                  ePaper: <Link>+88 01708411997</Link> (10am-6pm, Phone &
                  WhatsApp)
                </li>
              </ul>
              <h4 className="english-font">Email</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  Print Ad Sales: <Link>ad@ajkalusa.com</Link>
                </li>
                <li>
                  Digital Ad Sales: <Link>adsales@ajkalusa.com</Link>
                </li>
                <li>Fax: 02 55012200, 02 55012211</li>
                <li>
                  ePaper: <Link>epaper@ajkalusa.com</Link>
                </li>
              </ul>
              <h4 className="english-font">Follow us on</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  <Link>facebook.com/Dailyajkalusa</Link>
                </li>
                <li>
                  <Link>twitter.com/ajkalusa</Link>
                </li>
                <li>
                  <Link>instagram.com/ajkalusa</Link>
                </li>
                <li>
                  <Link>youtube.com/ajkalusa</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="text-muted fw-bold secondary-color">যোগাযোগ</h1>
            </div>
            {/* Content Start In Bangla */}
            <div className="pt-5">
              <h4 className="english-font">প্রধান কার্যালয়</h4>
              <p>১৯ কারওয়ান বাজার, ঢাকা ১২১৫, বাংলাদেশ।</p>
              <strong>ফোন</strong>
              <ul>
                <li>
                  <Link>+৮৮ ০২ ৫৫০১৩৪৩০</Link>
                </li>
                <li>
                  <Link>+৮৮ ০২ ৫৫০১৩৪৩১</Link>
                </li>
                <li>
                  <Link>+৮৮ ০২ ৫৫০১৩৪৩২</Link>
                </li>
                <li>
                  <Link>+৮৮ ০২ ৫৫০১৩৪৩৩</Link>
                </li>
              </ul>
              <h4 className="english-font">ইমেইল</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  অফিস: <Link>info@ajkalusa.com</Link>
                </li>
                <li>
                  বার্তা বিভাগ: <Link>adsales@ajkalusa.com</Link>
                </li>
                <li>
                  সম্পাদকীয় বিভাগ: <Link>adsales@ajkalusa.com</Link>
                </li>
                <li>
                  পত্রিকা বিজ্ঞাপন বিভাগ: <Link>adsales@ajkalusa.com</Link>
                </li>
                <li>
                  ডিজিটাল বিজ্ঞাপন বিভাগ: <Link>adsales@ajkalusa.com</Link>
                </li>
                <li>Fax: 02 55012200, 02 55012211</li>
              </ul>
              <h4>ওয়েবসাইট</h4>
              <Link>ajkalusa.com</Link>
              <h4 className="english-font pt-3">Follow us on</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  <Link>facebook.com/Dailyajkalusa</Link>
                </li>
                <li>
                  <Link>twitter.com/ajkalusa</Link>
                </li>
                <li>
                  <Link>instagram.com/ajkalusa</Link>
                </li>
                <li>
                  <Link>youtube.com/ajkalusa</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
