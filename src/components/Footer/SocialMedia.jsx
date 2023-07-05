import socialMediaList from "./SocialMediaList";

const SocialMedia = () => {
  socialMediaList.map((el) => {
    console.log(el);
  });
  console.log(1);
  return (
    <>
      <div className="w-full h-px bg-black">
        <div className="w-full max-w-[1160px] flex justify-between mt-6 m-auto">
          <div>Copyright © 2023 Parse Task Все права защищены.</div>
          <div className="flex gap-x-5">
            {socialMediaList.map((el) => {
              return (
                <a href={el.href}>
                  <img src={el.img} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
