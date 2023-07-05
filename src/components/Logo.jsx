import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-x-3 items-center">
      <img src={logo} />
      <span className="font-semibold leading-normal text-dark-100">Parser Task</span>
    </div>
  );
};

export default Logo;
