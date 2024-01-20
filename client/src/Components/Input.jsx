function Input({ label, setData , type }) {
  return (
    <div className=" my-3">

    <input type = {type}
      onChange={(e) => {
        setData(e.target.value);
      }}
      className=" outline-none w-full rounded-md  my-1 block bg-gray-300 px-3 py-2 "

      placeholder={label}
    />

    </div>
  );
}
export default Input;
