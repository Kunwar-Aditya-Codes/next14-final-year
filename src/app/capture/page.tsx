import Camera from "@/components/Camera";

const Capture = () => {
  return <div className='text-white h-screen backdrop-blur-md min-h-screen w-screen p-4'>
    <div className="w-[95%] mx-auto my-auto h-[95%]  border border-zinc-900 p-6">
      <Camera />
    </div>
  </div>;
};
export default Capture;
