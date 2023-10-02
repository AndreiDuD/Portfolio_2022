import Strings from "../Shared/Strings";

function Services() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONT_END,
      desc: Strings.FRONT_DESC,
      logo: "/logo.png",
    },
    {
      id: 2,
      title: Strings.BACK_END,
      desc: Strings.BACK_DESC,
      logo: "/logo.png",
    },
    {
      id: 3,
      title: Strings.ONLINE,
      desc: Strings.ONLINE_DESC,
      logo: "/logo.png",
    },
  ];
  return (
    <div className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-16 h-6 bg-accent dark:bg-accentDark rounded-full"></div>
        <div className="w-full border mx-4 mt-2 text-accent dark:text-accentDark"></div>
        <h2 className="font-bold text-4xl text-dark dark:text-light">
          {Strings.SERVICES}
        </h2>
        <div className="w-full border mx-4 mt-2 text-accent dark:text-accentDark"></div>
        <div className="w-16 h-6 bg-accent dark:bg-accentDark rounded-full"></div>
      </div>
      <div className="flex justify-around mt-16">
        {servicesList.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col justify-center items-center gap-6"
          >
            <div className="bg-accent/60 dark:bg-accentDark/90 rounded-full w-24 h-24">
              <img
                src={item.logo}
                alt={item.title}
                className="w-24 h-24 p-5 hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold text-dark dark:text-light">
              {item.title}
            </h2>
            <h2 className="text-gray">{item.desc}</h2>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 text-light dark:text-dark bg-accent dark:bg-accentDark p-2 rounded-full cursor-pointer hover:scale-110 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
