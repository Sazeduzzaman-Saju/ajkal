import React from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import "./Categories.css";
import { Link } from "react-router-dom";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
const Categories = () => {
  return (
    <div className="container">
      <PostHeader title="বিশ্ব" />
      <div className="row">
        <CategoryFeature></CategoryFeature>
        <div className="col-lg-4">
          <div>
            <div>
              {/* Nav tabs */}
              <ul className="nav custom-nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    সর্বশেষ
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    সর্ববাধিক পঠিত
                  </button>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div>
                  <ul className="list-news">
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                        <img
                          className="img-fluid"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1072b095700315.5ed7f84e468ba.png"
                          alt=""
                        />
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          বিশ্ববিদ্যালয়ে অনলাইন ক্লাস শুরু হলো, শিক্ষার্থীরা
                          খুব উত্সাহিত
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          রমজানে মুসলিম সমাজের উপর নানা ধরনের চ্যালেঞ্জ, দোয়া ও
                          আমলে মাসের মূল্যায়ন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          স্বাস্থ্য অধিদপ্তরের আদেশে রেমডেসিভির কম ব্যবহার
                          নেতারা শান্তিপূর্ণভাবে সহজে জীবন কাটাতে পারছেন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          রমজানে মুসলিম সমাজের উপর নানা ধরনের চ্যালেঞ্জ, দোয়া ও
                          আমলে মাসের মূল্যায়ন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          স্বাস্থ্য অধিদপ্তরের আদেশে রেমডেসিভির কম ব্যবহার
                          নেতারা শান্তিপূর্ণভাবে সহজে জীবন কাটাতে পারছেন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          বিশ্ববিদ্যালয়ে অনলাইন ক্লাস শুরু হলো, শিক্ষার্থীরা
                          খুব উত্সাহিত
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div>
                    <ul className="list-news">
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          বিশ্ববিদ্যালয়ে অনলাইন ক্লাস শুরু হলো, শিক্ষার্থীরা
                          খুব উত্সাহিত
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          রমজানে মুসলিম সমাজের উপর নানা ধরনের চ্যালেঞ্জ, দোয়া ও
                          আমলে মাসের মূল্যায়ন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          স্বাস্থ্য অধিদপ্তরের আদেশে রেমডেসিভির কম ব্যবহার
                          নেতারা শান্তিপূর্ণভাবে সহজে জীবন কাটাতে পারছেন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          রমজানে মুসলিম সমাজের উপর নানা ধরনের চ্যালেঞ্জ, দোয়া ও
                          আমলে মাসের মূল্যায়ন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          স্বাস্থ্য অধিদপ্তরের আদেশে রেমডেসিভির কম ব্যবহার
                          নেতারা শান্তিপূর্ণভাবে সহজে জীবন কাটাতে পারছেন
                        </Link>
                      </li>
                      <li>
                        <Link to={"/news/2"} className="fs-5 text-muted">
                          বিশ্ববিদ্যালয়ে অনলাইন ক্লাস শুরু হলো, শিক্ষার্থীরা
                          খুব উত্সাহিত
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Addvertisement Box*/}
      <div className="row align-content-center ">
        <div className="col-lg-12">
          <div className="d-flex justify-content-center ">
            <img
              src="https://www.adgully.com/banners/ezgif_com_gif_maker__1__183907.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Addvertisement Box ENd*/}
      <hr />

      <div className="row">
        <div className="col-lg-8 offset-2 mx-auto">
          <div className="row align-items-center py-3">
            <div className="col-sm-7">
              <div>
                <h4>ফটো ফিচার রাকিতিচ-নেইমারের ‘নতুন ঘর’ আর খাজার ‘ঝামেলা’</h4>
                <p>
                  ‘ঝামেলা’ নিয়ে আসছেন উসমান খাজা। জীবনের সফরের জন্য প্রস্তুতি
                  নিতে বলছেন নাওমি ওসাকা। আর নতুন ঘরে উপভোগের মন্ত্র ইভান
                  রাকিতিচের। সামাজিক যোগাযোগমাধ্যমে পাওয়া খেলার তারকাদের
                </p>
                <p>১৬ মিনিট আগে</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <img
                  className="img-fluid"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F1777064e-52c8-4f22-8308-8234df6611cd%2FIvan_Rakitic.jpg?rect=0%2C0%2C1440%2C960&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3">
            <div className="col-sm-7">
              <div>
                <h4>ফটো ফিচার রাকিতিচ-নেইমারের ‘নতুন ঘর’ আর খাজার ‘ঝামেলা’</h4>
                <p>
                  ‘ঝামেলা’ নিয়ে আসছেন উসমান খাজা। জীবনের সফরের জন্য প্রস্তুতি
                  নিতে বলছেন নাওমি ওসাকা। আর নতুন ঘরে উপভোগের মন্ত্র ইভান
                  রাকিতিচের। সামাজিক যোগাযোগমাধ্যমে পাওয়া খেলার তারকাদের
                </p>
                <p>১৬ মিনিট আগে</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <img
                  className="img-fluid"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F1777064e-52c8-4f22-8308-8234df6611cd%2FIvan_Rakitic.jpg?rect=0%2C0%2C1440%2C960&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3">
            <div className="col-sm-7">
              <div>
                <h4>ফটো ফিচার রাকিতিচ-নেইমারের ‘নতুন ঘর’ আর খাজার ‘ঝামেলা’</h4>
                <p>
                  ‘ঝামেলা’ নিয়ে আসছেন উসমান খাজা। জীবনের সফরের জন্য প্রস্তুতি
                  নিতে বলছেন নাওমি ওসাকা। আর নতুন ঘরে উপভোগের মন্ত্র ইভান
                  রাকিতিচের। সামাজিক যোগাযোগমাধ্যমে পাওয়া খেলার তারকাদের
                </p>
                <p>১৬ মিনিট আগে</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <img
                  className="img-fluid"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/40155597907179.5ed03bb5d46d7.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3">
            <div className="col-sm-7">
              <div>
                <h4>ফটো ফিচার রাকিতিচ-নেইমারের ‘নতুন ঘর’ আর খাজার ‘ঝামেলা’</h4>
                <p>
                  ‘ঝামেলা’ নিয়ে আসছেন উসমান খাজা। জীবনের সফরের জন্য প্রস্তুতি
                  নিতে বলছেন নাওমি ওসাকা। আর নতুন ঘরে উপভোগের মন্ত্র ইভান
                  রাকিতিচের। সামাজিক যোগাযোগমাধ্যমে পাওয়া খেলার তারকাদের
                </p>
                <p>১৬ মিনিট আগে</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <img
                  className="img-fluid"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F1777064e-52c8-4f22-8308-8234df6611cd%2FIvan_Rakitic.jpg?rect=0%2C0%2C1440%2C960&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center pb-4">
                <img
                  className="img-fluid"
                  src="https://usercontent.one/wp/italbangla.net/wp-content/themes/newsportal/images/ad.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3">
            <div className="col-sm-7">
              <div>
                <h4>ফটো ফিচার রাকিতিচ-নেইমারের ‘নতুন ঘর’ আর খাজার ‘ঝামেলা’</h4>
                <p>
                  ‘ঝামেলা’ নিয়ে আসছেন উসমান খাজা। জীবনের সফরের জন্য প্রস্তুতি
                  নিতে বলছেন নাওমি ওসাকা। আর নতুন ঘরে উপভোগের মন্ত্র ইভান
                  রাকিতিচের। সামাজিক যোগাযোগমাধ্যমে পাওয়া খেলার তারকাদের
                </p>
                <p>১৬ মিনিট আগে</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <img
                  className="img-fluid"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F1777064e-52c8-4f22-8308-8234df6611cd%2FIvan_Rakitic.jpg?rect=0%2C0%2C1440%2C960&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3">
            <div className="col-sm-7">
              <div>
                <h4>ফটো ফিচার রাকিতিচ-নেইমারের ‘নতুন ঘর’ আর খাজার ‘ঝামেলা’</h4>
                <p>
                  ‘ঝামেলা’ নিয়ে আসছেন উসমান খাজা। জীবনের সফরের জন্য প্রস্তুতি
                  নিতে বলছেন নাওমি ওসাকা। আর নতুন ঘরে উপভোগের মন্ত্র ইভান
                  রাকিতিচের। সামাজিক যোগাযোগমাধ্যমে পাওয়া খেলার তারকাদের
                </p>
                <p>১৬ মিনিট আগে</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <img
                  className="img-fluid"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a3f99499001381.5efa1371aa6f6.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-12 pt-3 pb-5">
              <div className="d-flex justify-content-start align-items-center ">
                <Link className="text-center">
                  <button className="submit-btn-one rounded-pill px-5">
                    আরও দেখুন
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
