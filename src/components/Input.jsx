const Input = ({ type, text, name, value, onChangeHandler, required }) => {
  return (
    <label className="cursor-pointer relative ">
      <input
        required={required}
        type={type}
        name={name}
        placeholder={text}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        className="outline-none border-gray-400 border rounded-xl p-3 w-[100%]
      focus:border-blue-400 transition duration-300 my-3 focus:placeholder-transparent"
      />
      <span className="absolute left-3 top-0 text-input text-transparent z-[-1] transition duration-300 px-2">
        {text}
      </span>
    </label>
  );
};

export default Input;
