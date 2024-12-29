const Loader = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="relative">
        <div className="absolute h-12 w-12 rounded-full border-4 border-solid border-gray-200"></div>
        <div className="absolute h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    </div>
  );
};
export default Loader;
