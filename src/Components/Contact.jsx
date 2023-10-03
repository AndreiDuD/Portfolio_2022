import { useForm } from "react-hook-form";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="px-12 mb-36 mt-12">
      <div className="flex items-center justify-center">
        <div className="w-full border mx-4 text-accent dark:text-accentDark" />
        <h2 className="font-bold text-4xl mb-2 text-dark dark:text-light">
          Contact
        </h2>
        <div className="w-full border mx-4 text-accent dark:text-accentDark" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 w-full flex flex-col md:flex-row items-center justify-center text-dark dark:text-light"
      >
        <div className="w-1/2 block md:hidden lg:block">
          <DotLottiePlayer
            src="/animation_lna66op0.lottie"
            autoplay
            loop
          ></DotLottiePlayer>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 80 })}
              className="mr-4 p-2 border-2 border-accent dark:border-accentDark rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("Last name", { required: true, maxLength: 100 })}
              className="p-2 border-2 border-accent dark:border-accentDark rounded-lg"
            />
          </div>
          <div className="flex justify-between mb-2">
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              className="p-2 border-2 border-accent dark:border-accentDark rounded-lg"
            />
            <input
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              className="p-2 border-2 border-accent dark:border-accentDark rounded-lg"
            />
          </div>
          <textarea
            placeholder="Message"
            {...register("Message", {
              required: true,
              maxLength: 300,
              minLength: 10,
            })}
            className="h-32 max-h-32 mt-4 border-2 border-accent dark:border-accentDark rounded-lg "
          />

          <input
            type="submit"
            className="mt-4 bg-blue rounded-xl px-8 py-4 uppercase cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
}
