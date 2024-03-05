import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./NewsDetails.css";
import { Link } from "react-router-dom";
import ReletedNews from "../../Comps/ReletedNews/ReletedNews";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";

const NewsDetails = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-lg-12">
          <div style={{ borderBottom: "2px solid var(--secondary)" }}>
            <h5 className="text-muted">বিস্তারিত নিউজ</h5>
          </div>
          <div className="d-flex justify-content-between  align-items-center pt-3">
            <h5>বাংলাদেশ</h5>
            <h5>২৩ টা ৫ মিনিট, ১২ ফেব্রুয়ারি ২০২৪</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <h1>রেলের কেনাকাটা: ভুয়া বিলে কোটি টাকা পরিশোধ!</h1>

          <p>
            কোনো পণ্য বা সেবা না নিয়েও প্রায় ৯৭ লাখ টাকা পরিশোধ করতে হয়েছে
            রেলওয়েকে। প্রতারক চক্র ভুয়া বিল ও ভাউচারের মাধ্যমে এ টাকা আত্মসাৎ
            করেছে। আর এ কাজে রেলের হিসাব বিভাগ থেকে শুরু করে ব্যাংকের কর্মীরাও
            জড়িত থাকতে পারেন বলে সন্দেহ করা হচ্ছে।
          </p>
          <div>
            <img src="http://ajkalusa.nawazgroup.us/img/SingleNews/news1.png" alt="" />
            <p className="pt-2">
              পণ্য না কিনেও প্রায় কোটি টাকার বিল পরিশোধ করেছে রেলওয়ে। ফাইল ছবি
            </p>
            {/* Author */}
            <div className="d-flex justify-content-between  align-items-center py-5">
              <div>
                <h4>নাজমুস সালেহী</h4>
                <p>২৩ মিনিট আগে</p>
              </div>
              <div>
                <div className="social-author">
                  <a href="#" className="">
                    <FaFacebook />
                  </a>
                  <a href="#" className="">
                    <FaTwitter />
                  </a>
                  <a href="#" className="">
                    <FaYoutube />
                  </a>
                  <a href="#" className="">
                    <AiFillInstagram />
                  </a>
                  <a href="#" className="">
                    <FaRegShareFromSquare />
                  </a>
                </div>
              </div>
            </div>
            {/* News Details */}
            <p>
              এ ঘটনায় পূর্বাঞ্চল রেলওয়ের প্রধান হিসাব কর্মকর্তার দফতর ৭ কর্মীকে
              সাময়িক বরখাস্ত করেছে। পাশাপাশি রোববার (১১ ফেব্রুয়ারি) গঠন করা
              হয়েছে তদন্ত কমিটি। কমিটির প্রতিবেদনের পর কঠোর পদক্ষেপ নেয়া হবে বলে
              জানা গেছে। রেলের সরঞ্জাম নিয়ন্ত্রকের দফতর জানায়, গত অর্থ বছরে
              ঠিকাদার প্রতিষ্ঠান কসমোপলিটনের থেকে বেশ কিছু চুক্তির মাধ্যমে
              মালামাল ক্রয় করা হয়। এরমধ্যে চারটি কাজের বিল বাবদ ৩ কোটি ৬২ লাখ
              টাকা কসমোপলিটনকে পরিশোধ করতে হিসাব দফতরকে চিঠি দেন প্রধান সরঞ্জাম
              নিয়ন্ত্রক ফরিদ উদ্দীন। সেই টাকা উত্তোলনও করে নেয় প্রতিষ্ঠানটি।
            </p>
            <div className="pb-4 py-3">
              <img
                className="img-fluid"
                src="https://i.ibb.co/myN58Z7/Whats-App-Image-2024-02-18-at-22-16-04-10030316.jpg"
                alt=""
              />
            </div>
            <p>
              তবে বিপত্তি বাধে যখন দেখা যায়, ৩ কোটি ৬২ লাখের বাইরে আরও ৯৭ লাখ
              টাকা বিল নিয়েছে কসমোপলিটন। সোহাগ নামে এক ব্যক্তি সীমান্ত ব্যাংকের
              চট্টগ্রাম আগ্রাবাদ শাখা থেকে পুরো টাকা উত্তোলন করেছেন। তবে এ বিষয়ে
              কিছু জানে না কসমোপলিটনের স্বত্বাধিকারী নাবিল আহসান। তিনি সময়
              সংবাদকে বলেন, ‘প্রধান সরঞ্জাম নিয়ন্ত্রকের বরাদ্দ করা ৩ কোটি ৬২ লাখ
              টাকা উত্তোলন করেছি। তবে আর কোনো টাকার বিষয়ে আমার জানা নেই।’ আরও
              পড়ুন: কাদের জন্য ৩০০ কোটি টাকার ‘কৃষিকোচ’ চালাচ্ছে রেলওয়ে? তিনি
              অভিযোগ করেন, রেলের হিসাব শাখার সংশ্লিষ্ট দফতরের কর্মকর্তাদের
              সহায়তায় তার প্রতিষ্ঠানের নাম ব্যবহার করে ৯৭ লাখ টাকা উত্তোলন করা
              হয়ে থাকতে পারে। নাবিল আহসান বলেন, ‘সীমান্ত ব্যাংকের আগ্রাবাদ শাখা
              থেকে ৯৭ লাখ টাকা উত্তোলন হয়েছে। তবে ওই ব্যাংকে আমার প্রতিষ্ঠানের
              কোনো অ্যাকাউন্ট নেই। এমনকি সোহাগ নামের কাউকেও আমি চিনি না।’
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          
          <div style={{ borderBottom: "2px solid var(--secondary)" }}>
            <h5 className="text-muted main-color">সর্বাধিক পঠিত</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-4 ">
            <img
              src="https://i.ibb.co/j39LZmN/Give-Advertisement.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <div className="d-flex align-items-center py-3">
              <div>
                <Link to="/">
                  <img src="http://ajkalusa.nawazgroup.us/img/Short/1.png" alt="" />
                </Link>
              </div>
              <div className="ps-3">
                <h6>বিনোদন</h6>
                <p className="m-0">দীঘির টাকা নিল প্রতারক, ফেরত দিল ডিবি</p>
              </div>
            </div>
            <div className="d-flex align-items-center py-3">
              <div>
                <Link to="/">
                  <img src="http://ajkalusa.nawazgroup.us/img/Short/1.png" alt="" />
                </Link>
              </div>
              <div className="ps-3">
                <h6>বিনোদন</h6>
                <p className="m-0">দীঘির টাকা নিল প্রতারক, ফেরত দিল ডিবি</p>
              </div>
            </div>
            <div className="d-flex align-items-center py-3">
              <div>
                <Link to="/">
                  <img src="http://ajkalusa.nawazgroup.us/img/Short/1.png" alt="" />
                </Link>
              </div>
              <div className="ps-3">
                <h6>বিনোদন</h6>
                <p className="m-0">দীঘির টাকা নিল প্রতারক, ফেরত দিল ডিবি</p>
              </div>
            </div>
            <div className="d-flex align-items-center py-3">
              <div>
                <Link to="/">
                  <img src="http://ajkalusa.nawazgroup.us/img/Short/1.png" alt="" />
                </Link>
              </div>
              <div className="ps-3">
                <h6>বিনোদন</h6>
                <p className="m-0">দীঘির টাকা নিল প্রতারক, ফেরত দিল ডিবি</p>
              </div>
            </div>
            <div className="d-flex align-items-center py-3">
              <div>
                <Link to="/">
                  <img src="http://ajkalusa.nawazgroup.us/img/Short/1.png" alt="" />
                </Link>
              </div>
              <div className="ps-3">
                <h6>বিনোদন</h6>
                <p className="m-0">দীঘির টাকা নিল প্রতারক, ফেরত দিল ডিবি</p>
              </div>
            </div>
            <div className="d-flex align-items-center py-3">
              <div>
                <Link to="/">
                  <img src="http://ajkalusa.nawazgroup.us/img/Short/1.png" alt="" />
                </Link>
              </div>
              <div className="ps-3">
                <h6>বিনোদন</h6>
                <p className="m-0">দীঘির টাকা নিল প্রতারক, ফেরত দিল ডিবি</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-4 ">
            <img
              src="https://i.ibb.co/CHz52fX/goldenagehome.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          
        </div>
      </div>
      <div className="pt-5">
        <div style={{ borderBottom: "2px solid var(--secondary)" }}>
          <h5 className="text-muted">
            <Link to={'/'} className="text-muted">পার্বত্য চট্টগ্রাম নিয়ে আরও পড়ুন</Link>
          </h5>
        </div>
        <ReletedNews></ReletedNews>
      </div>
    </div>
  );
};

export default NewsDetails;
