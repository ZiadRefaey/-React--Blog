import { useForm, type SubmitHandler } from "react-hook-form";
import Envelope from "./Envelope";
import Input from "./Input";
import Lock from "./Lock";
import UserIcon from "./UserIcon";

export default function SignUpForm() {
  interface Inputs {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex items-start justify-center flex-col gap-5 w-full">
      <div>
        <p className="text-mute text-2xl font-bold mb-1">Account Creation</p>
        <p className="text-mute-secondary ">
          Create an account to access the archive.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-start justify-start flex-col gap-3 "
      >
        <Input
          register={register}
          icon={<UserIcon />}
          label="Full Name"
          name="fullName"
          placeholder="Ahmed Mohammed"
          type="text"
          validation={{
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only letters and spaces are allowed",
            },
          }}
          error={errors.fullName?.message}
        />
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
        <Input
          register={register}
          icon={<Lock />}
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Re-enter your password..."
          type="password"
          validation={{
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
          error={errors.confirmPassword?.message}
        />
        <button className="w-full rounded-xl bg-primary cursor-pointer text-background font-bold py-4 hover:shadow shadow-primary transition ">
          Register
        </button>
      </form>
    </div>
  );
}
