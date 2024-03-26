import React from "react";

const EpaperGallary = () => {
  return (
    <div>
      <img
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        className="img-fluid w-100"
        src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428707180_995436535343602_8014682081593180468_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eTED714BhAgAX-4OqO4&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfAE7Z-SsTHCg9aiQWp3E2EGsQTNt-CO9b7-9azJhb8xcQ&oe=6608CE1A"
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
              <div className="modal-body p-0">
                <img
                  className="img-fluid w-100"
                  src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428707180_995436535343602_8014682081593180468_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eTED714BhAgAX-4OqO4&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfAE7Z-SsTHCg9aiQWp3E2EGsQTNt-CO9b7-9azJhb8xcQ&oe=6608CE1A"
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
