import Logo from "../Logo";

const Description = () => {
  return (
      <div className="flex flex-col gap-y-3">
        <Logo />
        <div className="text-dark-75 text-sm font-normal leading-6 max-w-[260px]">
          Лучший портал по обработке документов и СНИП 2022 года по версии
          ассоциации «Отельные взгляды»
        </div>
      </div>
  );
};

export default Description;
