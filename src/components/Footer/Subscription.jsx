import submit from "../../assets/submit.svg";

const Subscription = () => {
  return (
    <div className="flex gap-y-5 flex-col max-w-[260px]">
      <h3 className="text-dark-100 text-xs font-bold uppercase">Подписка</h3>
      <span className="text-dark-50 text-sm font-normal leading-normal">
        Получайте специальные предложения и новости сервиса
      </span>
      <div className="relative">
        <input className="border pl-4 py-3 rounded-md w-full" placeholder="Email" />
        <button className="absolute right-3 top-4 flex items-center justify-center bg-transparent border-none">
          <img src={submit}/>
        </button>
      </div>
    </div>
  );
};

export default Subscription;
