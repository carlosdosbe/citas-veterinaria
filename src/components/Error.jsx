const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-400 p-3 my-3 rounded-lg text-center text-white">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
