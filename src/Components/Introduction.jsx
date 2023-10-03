function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-36  -mt-8" />
      <div className="w-4 h-4 bg-accent dark:bg-accentDark rounded-full"></div>
      <h2 className="mt-5 text-dark dark:text-light font-medium text-lg">
        Hi, my name is
      </h2>
      <h2 className="text-7xl font-bold text-dark dark:text-light tracking-widest mt-5 text-center">
        Andrei <br />
        Duduman
      </h2>
      <img
        src="/profile.jpeg"
        alt="profile"
        className="w-48 h-48  bg-accent dark:bg-accentDark p-2 rounded-full object-cover mt-10"
      />
    </div>
  );
}

export default Introduction;
