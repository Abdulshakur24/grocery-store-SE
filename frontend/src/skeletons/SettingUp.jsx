import { RiLoader2Line } from "react-icons/ri";

function SettingUpAnApp() {
  return (
    <div className="fixed inset-0 z-50 w-full h-full flex items-center justify-center">
      <div className="font-semibold text-xl flex flex-col-reverse items-center gap-4">
        <h1 className="text-black">Loading</h1>
        <RiLoader2Line className="animate-spin-slow text-4xl fill-primary" />
      </div>
    </div>
  );
}

export default SettingUpAnApp;
