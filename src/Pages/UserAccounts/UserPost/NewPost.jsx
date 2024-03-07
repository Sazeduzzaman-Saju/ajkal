import { useForm } from "react-hook-form";

export default function NewPost() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-12">
          <input
            className="w-100 form-control"
            placeholder="টাইটেল দিন"
            type="text"
            {...register("search_word", { required: true })}
            aria-invalid={errors.search_word ? "true" : "false"}
          />
          {errors.search_word?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-lg-3">
          <select
            className="form-select"
            {...register("category", { required: true })}
          >
            <option value="">ক্যটেগরি বেছে নিন।...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          {errors.category?.type === "required" && (
            <p role="alert" className="text-danger">
              ক্যটেগরি নির্বাচন করেননি ।
            </p>
          )}
        </div>
        <div className="col-lg-3">
          <input
            className="w-100 form-control"
            type="date"
            placeholder="তারিখ"
            {...register("newDate", { required: true })}
            aria-invalid={errors.newDate ? "true" : "false"}
          />
          {errors.newDate?.type === "required" && (
            <p role="alert" className="text-danger">
              তারিখ নির্বাচন করেননি ।
            </p>
          )}
        </div>
        <div className="col-lg-3">
          <p className="m-0"></p>
          <input
            className="w-100 form-control"
            type="text"
            placeholder="লেখক"
            {...register("writer", { required: true })}
            aria-invalid={errors.writer ? "true" : "false"}
          />
          {errors.writer?.type === "required" && (
            <p role="alert" className="text-danger">
              লেখক নির্বাচন করেননি ।
            </p>
          )}
        </div>
        <div className="col-lg-3">
          <p className="m-0">ধরন</p>
          <input
            className="w-100 form-control"
            type="text"
            placeholder="ভিডিও/ নিউজ"
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert" className="text-danger">
              ধরন নির্বাচন করেননি ।
            </p>
          )}
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-lg-4">
          <p className="m-0">থাম্বনেইল দিন</p>
          <input
            className="w-100 form-control"
            type="file"
            placeholder="ভিডিও/ নিউজ"
            {...register("thumbnail")}
            aria-invalid={errors.thumbnail ? "true" : "false"}
          />
        </div>
        <div className="col-lg-4">
          <p className="m-0">মুল ছবি দিন</p>
          <input
            className="w-100 form-control"
            type="file"
            placeholder="ভিডিও/ নিউজ"
            {...register("mainImg")}
            aria-invalid={errors.mainImg ? "true" : "false"}
          />
          {errors.mainImg?.type === "required" && (
            <p role="alert" className="text-danger">
              ছবি নির্বাচন করেননি ।
            </p>
          )}
        </div>
        <div className="col-lg-4">
          <p className="m-0">বিজ্ঞাপন</p>
          <div className="d-flex justify-content-between align-items-center pt-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                বিজ্ঞাপন দিব।
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                বিজ্ঞাপন দিব না।
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-lg-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
              {...register("termsCondition")}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              এই ওয়েবসাইট বা অ্যাপ্লিকেশন ব্যবহার করতে, আপনি এবং আপনার সকল
              কাজের জন্য নীতি এবং শর্তাদির সাথে অভিমুখ হতে স্বীকৃতি দিতে হবেন।
            </label>
          </div>

          {errors.firstName?.type === "required" && (
            <p role="alert" className="text-danger">
              ধরন নির্বাচন করেননি ।
            </p>
          )}
        </div>
      </div>
      <div className="row pt-5 pb-0">
        <div className="col-lg-12">
          <button type="submit" className="submit-btn-one w-100 mx-0">
            পোস্ট করুন এখনি।
          </button>
        </div>
      </div>
    </form>
  );
}
