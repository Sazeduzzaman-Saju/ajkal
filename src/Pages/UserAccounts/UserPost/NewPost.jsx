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
      <div className="row pt-4">
        <div className="col-lg-6">
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
        <div className="col-lg-6">
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
      </div>
      <div className="row pt-6">
        <div className="col-lg-6">
          <p className="m-0">থাম্বনেইল দিন</p>
          <input
            className="w-100 form-control"
            type="file"
            placeholder="ভিডিও/ নিউজ"
            {...register("thumbnail")}
            aria-invalid={errors.thumbnail ? "true" : "false"}
          />
        </div>
        <div className="col-lg-6">
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
        <div className="col-lg-12  pt-5">
          Texteditor Is Cokking Now
        </div>
        <div className="col-lg-12">
          <div className="form-check pt-5">
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
