import Envelope from "./Envelope";
import Input from "./Input";
import Lock from "./Lock";
import UserIcon from "./UserIcon";

export default function SignUpForm() {
  return (
    <div className="flex items-start justify-center flex-col gap-5 w-full">
      <div>
        <p className="text-mute text-2xl font-bold mb-1">Account Creation</p>
        <p className="text-mute-secondary ">
          Create an account to access the archive.
        </p>
      </div>

      <form className="w-full flex items-start justify-start flex-col gap-3 ">
        <Input
          icon={<UserIcon />}
          label="Full Name"
          name="fullname"
          placeholder="Ahmed Mohammed"
          type="text"
        />
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
        <Input
          icon={<Lock />}
          label="Confirm Password"
          name="confirm-pass"
          placeholder="Re-enter your password..."
          type="password"
        />
        <button className="w-full rounded-xl bg-primary cursor-pointer text-background font-bold py-4 hover:shadow shadow-primary transition ">
          Register
        </button>
      </form>
    </div>
  );
}
