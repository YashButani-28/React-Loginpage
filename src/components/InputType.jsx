export default function InputType({ label, type,name,placeholder,inputValue,onChange}) {
  return (
    <p className="flex flex-col gap-2">
      <label className="text-white ">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        value={inputValue}
        onChange={onChange}
        className="  rounded-md h-10 p-2 outline-none"
      />
    </p>
  );
}
