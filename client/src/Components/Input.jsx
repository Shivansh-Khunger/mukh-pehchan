function Input({ label, setData , type , data }) {
  return (
    <div className="my-3 ">

    <input value={data} type = {type}
      onChange={(e) => {
        setData(e.target.value);
      }}
      className="block w-full px-3 py-2 my-1 bg-gray-300 rounded-md outline-none "

      placeholder={label}
    />

    </div>
  );
}
export default Input;
