import React from "react";

const EpaperGallary = () => {
  return (
    <div>
      <img
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        className="img-fluid w-100"
        src="https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/pages/2024-03-25_1.jpg"
        alt=""
      />
      <div>
        {/* Modal trigger button */}

        {/* Modal Body */}
        {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content rounded-0">
              <div className="modal-header p-2 bg-light rounded-0 px-3">
                <h5 className="modal-title" id="modalTitleId">
                  সাপ্তাহিক আজকাল ইপেপার।
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  className="img-fluid w-100"
                  src="https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/pages/2024-03-25_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>
    </div>
  );
};

export default EpaperGallary;
