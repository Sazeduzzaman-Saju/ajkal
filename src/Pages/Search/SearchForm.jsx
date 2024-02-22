import { useForm } from "react-hook-form";

export default function SearchForm() {
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
        <p className="m-0">খোঁজ করুন...</p>
        <input
          className="w-100 form-control"
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
        <p className="m-0">ক্যটেগরি বেছে নিন।</p>
        <select
          className="form-select"
          {...register("category", { required: true })}
        >
          <option value="">সিলেক্ট করুন...</option>
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
        <p className="m-0">তারিখ নির্বাচন করুন।</p>
        <input
          className="w-100 form-control"
          type="date"
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
        <p className="m-0">লেখক নির্বাচন করুন।</p>
        <input
          className="w-100 form-control"
          type="text"
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
        <p className="m-0">ধরন নির্বাচন করুন।</p>
        <input
          className="w-100 form-control"
          type="text"
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
    <div className="row pt-4 pb-4">
      <div className="col-lg-12">
        <button type="submit" className="submit-btn-one w-100 mx-0">
          অনুসন্ধান করুন এখনি।
        </button>
      </div>
    </div>
  </form>
  );
}
