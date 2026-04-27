import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Envelope from "./Envelope";
import Input from "./Input";
import Lock from "./Lock";
import { UserAuth } from "../providers/AuthContext";

interface Inputs {
  email: string;
  password: string;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "Something went wrong. Please try again.";
}

export default function SignInForm() {
  const navigate = useNavigate();
  const { signInUser } = UserAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setAuthError(null);
    setIsSigningIn(true);

    const result = await signInUser({
      email: data.email,
      password: data.password,
    });

    setIsSigningIn(false);

    if (!result?.success) {
      setAuthError(getErrorMessage(result?.error));
      return;
    }

    toast.success("Signed in successfully.");
    navigate("/");
  };

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
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message:
                "Must contain one lowercase letter, one uppercase letter, one number, and one special character",
            },
          }}
          error={errors.password?.message}
        />
        {authError && <p className="text-sm text-red-400">{authError}</p>}
        <button
          disabled={isSigningIn}
          className="w-full rounded-xl bg-primary cursor-pointer text-background font-bold py-4 hover:shadow shadow-primary transition disabled:cursor-not-allowed disabled:opacity-70 "
        >
          {isSigningIn ? "Signing in..." : "Sign In to Archive"}
        </button>
      </form>
    </div>
  );
}
