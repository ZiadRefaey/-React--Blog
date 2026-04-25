import Envelope from "./Envelope";
import Input from "./Input";
import Lock from "./Lock";

export default function SignInForm() {
  return (
    <div className="flex items-start justify-center flex-col gap-5 w-full">
      <div>
        <p className="text-mute text-2xl font-bold mb-1">Welcome Back</p>
        <p className="text-mute-secondary ">
          Enter your credentials to access the archive.
        </p>
      </div>

      <form className="w-full flex items-start justify-start flex-col gap-3">
        <Input
          icon={<Envelope />}
          label="Email Address"
          name="email"
          placeholder="example@example.com"
          type="text"
        />
        <Input
          icon={<Lock />}
          label="Password"
          name="password"
          placeholder="Pease enter your password..."
          type="password"
        />
        <button className="w-full rounded-xl bg-primary cursor-pointer text-background font-bold py-4 hover:shadow shadow-primary transition ">
          Sign In to Archive
        </button>
      </form>
    </div>
  );
}
