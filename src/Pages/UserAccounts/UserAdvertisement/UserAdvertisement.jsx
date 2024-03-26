
import UserAddPost from "../../../Comps/UserNewsPost/UserAddPost";
import MyAdds from "./MyAdds";

const UserAdvertisement = () => {

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-12 mx-auto">
            <div>
              <ul
                className="nav nav-tabs user-add d-flex justify-content-center  align-items-center "
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    বিজ্ঞাপন দিন।
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    বিজ্ঞাপন লিস্ট দেখুন।
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="text-center pt-5 main-color">
                          বিজ্ঞাপন দিন।
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <UserAddPost></UserAddPost>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div>
                        <h3 className="text-center pt-3">সকল পোস্ট</h3>
                        <div className="card border-0 mt-3 mb-5">
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table table-hover table-striped border text-center">
                                <thead>
                                  <tr className="user-th">
                                    <th>Sl</th>
                                    <th>Category</th>
                                    <th>Post Date</th>
                                    <th>Advertisement</th>
                                    <th>Post Status</th>
                                    <th>Due Ammount</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <MyAdds/>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdvertisement;
