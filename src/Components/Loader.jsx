export const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>
    </div>
  );
};