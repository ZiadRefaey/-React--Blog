import { useForm, type SubmitHandler } from "react-hook-form";
import Envelope from "./Envelope";
import Input from "./Input";
import Lock from "./Lock";

export default function SignInForm() {
  interface Inputs {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex items-start justify-center flex-col gap-5 w-full">
      <div>
        <p className="text-mute text-2xl font-bold mb-1">Welcome Back</p>
        <p className="text-mute-secondary ">
          Enter your credentials to access the archive.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-start justify-start flex-col gap-3"
      >
        <Input
          register={register}
          icon={<Envelope />}
          label="Email Address"
          name="email"
          placeholder="example@example.com"
          type="text"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          }}
          error={errors.email?.message}
        />

        <Input
          register={register}
          icon={<Lock />}
          label="Password"
          name="password"
          placeholder="Pease enter your password..."
          type="password"
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
              message: "Must contain letters and numbers",
            },
          }}
          error={errors.password?.message}
        />
        <button className="w-full rounded-xl bg-primary cursor-pointer text-background font-bold py-4 hover:shadow shadow-primary transition ">
          Sign In to Archive
        </button>
      </form>
    </div>
  );
}
