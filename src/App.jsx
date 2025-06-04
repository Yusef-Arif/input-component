import { useState } from "react";
import Input from "./components/Input";

function App() {
  const fields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      minLength: 6,
    },
    { name: "age", label: "Age", type: "number", required: true, min: 18 },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      required: true,
      pattern: /^[0-9]{11}$/,
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      minLength: 4,
    },
    { name: "bio", label: "Bio", type: "text", required: false },
    { name: "website", label: "Website", type: "url", required: false },
    { name: "linkedin", label: "LinkedIn", type: "url", required: false },
    { name: "github", label: "GitHub", type: "url", required: false },
    { name: "country", label: "Country", type: "text", required: true },
    { name: "city", label: "City", type: "text", required: true },
    {
      name: "postalCode",
      label: "Postal Code",
      type: "text",
      required: true,
      pattern: /^[0-9]{5}$/,
    },
    {
      name: "nationalId",
      label: "National ID",
      type: "text",
      required: true,
      pattern: /^[0-9]{14}$/,
    },
    { name: "gender", label: "Gender", type: "text", required: true },
    { name: "language", label: "Language", type: "text", required: true },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: false },
    {
      name: "experience",
      label: "Years of Experience",
      type: "number",
      required: false,
      min: 0,
    },
  ];
  const [data, setData] = useState({});
  const [submited, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validate = () => {
    const errors = {};
    fields.forEach((field) => {
      const value = data[field.name];

      if (field.required && !value) {
        errors[field.name] = `${field.label} is required`;
      } else {
        if (field.minLength && value && value.length < field.minLength) {
          errors[
            field.name
          ] = `${field.label} must be at least ${field.minLength} characters`;
        }

        if (field.pattern && value && !field.pattern.test(value)) {
          errors[field.name] = `${field.label} is not in correct format`;
        }

        if (field.type === "number" && value) {
          const numValue = Number(value);
          if (field.min !== undefined && numValue < field.min) {
            errors[field.name] = `${field.label} must be at least ${field.min}`;
          }
        }
      }
    });

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmit(false);
    } else {
      setErrors({});
      setSubmit(true);
    }
  };

  return (
    <section className="w-full flex justify-between items-start min-h-[100vh] p-12 max-sm:flex-col">
      <div className="bg-white w-[30%] max-sm:w-[100%] p-4 rounded-lg my-7">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-2xl font-bold text-center mb-4 text-blue-400">
            Input Component
          </h1>
          <div className="flex flex-col gap-3">
            {fields.map((field, index) => (
              <div key={index}>
                <Input
                  type={field.type}
                  text={field.label}
                  name={field.name}
                  onChangeHandler={onChangeHandler}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {submited && (
        <div className="bg-white w-[40%] max-sm:w-[100%] p-4 rounded-lg my-7">
          <h2 className="text-xl font-bold text-center mb-4 text-blue-400">
            Submitted Data
          </h2>
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(data, null, 2)}
          </pre>

          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setData({});
                setSubmit(false);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
