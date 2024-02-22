import React, { useState } from "react";
import "./style.css";
import { FaFacebookF, FaGoogle, FaUser, FaEye } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="container" showHeader={false}>
      <div className="row my-5 gx-0">
        <div className="col-lg-6">
          {/* <form noValidate validated={validated} onSubmit={handleSubmit}> */}
          <div className="card border-0 login-form bg-transparent ">
            <div className="card-body py-5 form-area ">
              <div>
                {/* <div className="d-flex justify-content-center  align-items-center ">
                    <img
                      className="img-fluid login-logo"
                      width={200}
                      src="https://i.ibb.co/6D35WjX/logo.png"
                      alt=""
                    />
                  </div> */}
                <div className="text-center py-2">
                  <h3 className="text-muted mb-0">লগিন করুন !</h3>
                  <p className="text-muted mb-0">
                    সাপ্তাহিক আজকাল এর ফেম্যালি তে আপনাকে স্বাগতম।
                  </p>
                </div>
                <div className="row py-2">
                  <div className="col-lg-6 offset-lg-3 mx-auto">
                    <div className="d-flex pb-2">
                      <div className="pe-2">
                        <Link to={"/"} className="submit-btn-one w-100">
                          <FaFacebookF /> ফেসবুক
                        </Link>
                      </div>
                      <div>
                        <Link to={"/"} className="submit-btn-one w-100">
                          <FaGoogle /> গুগোল
                        </Link>
                      </div>
                    </div>
                    <p className="text-center bg-light devider-text">Or</p>
                    <p className="devider"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-1 mx-auto">
                    {/* Form Start */}
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Row className="mb-3">
                        <Form.Group
                          className="pb-3"
                          as={Col}
                          md="12"
                          controlId="validationCustomUsername"
                        >
                          <Form.Label className="text-muted mb-0">
                            ইমেইল দিন। <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                              <IoMdMail></IoMdMail>
                            </InputGroup.Text>
                            <Form.Control
                              className="rounded-0 bg-light border-0"
                              type="email"
                              placeholder="youremail@gmail.com"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              দয়া করে সঠিক ইমেইল দিন।
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group
                          className="pb-3"
                          as={Col}
                          md="12"
                          controlId="validationCustomUsername"
                        >
                          <Form.Label className="text-muted mb-0">
                            পাসওয়ার্ড দিন।{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                              <FaEye />
                            </InputGroup.Text>
                            <Form.Control
                              className="rounded-0 bg-light border-0"
                              type="password"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              দয়া করে সঠিক ইমেইল দিন।
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <p className="text-muted text-center">
                        পাসওয়ার্ড ভুলে গিয়েছেন একাউন্ট এর
                        {/* <Link to={"/forgot-password"}> রিকভার করুন !</Link> */}
                        <Link to={"/user"}> রিকভার করুন !</Link>
                      </p>
                      <p className="text-muted text-center">
                        আপনি কী ! নতুন আপনার একাউন্ট নেই তাহলে--
                        <Link to={"/register"}> রেগুস্টার করুন !</Link>
                      </p>
                      <button
                        className="submit-btn-one w-100 mx-0"
                        role="button"
                      >
                        Login In
                      </button>
                    </Form>
                    {/* Form End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
        <div className="col-lg-6">
          <div className="card border-0 ">
            <div className="card-body p-0">
              <div className="sidebar-login">
                <img
                  className="login-sidebanner"
                  src="https://allbanglanewspaper.net/widget/image_slider/images/2.jpg"
                  alt=""
                />
                <div className="image-overlay-login">
                  <div className="p-5">
                    <h1 className="text-center">ফিরে আসার জন্য <br /> স্বাগত!</h1>
                    <p className="text-center pt-3">
                      যদি আপনার বিজ্ঞাপনের তথ্য প্রয়োজন হয়, তবে আপনার লগইনের পরে
                      আপনার অ্যাকাউন্টে দেখানো হবে। অথবা <Link to={'/accounts'} className="text-danger bg-white px-2 rounded-1">এখানে ক্লিক করুন</Link> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;