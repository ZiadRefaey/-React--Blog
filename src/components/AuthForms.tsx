import SignInForm from "./SignInForm";

export default function AuthForms() {
  return (
    <div className="w-full h-full flex items-start justify-center flex-col p-12 gap-5">
      <div className="bg-slate-800 w-full p-1 grid grid-cols-2 rounded-xl gap-2">
        <button className="w-full bg-primary rounded-xl py-2 text-background font-bold">
          Sign in
        </button>
        <button className="w-full  rounded-xl py-2 text-mute font-bold hover:bg-primary hover:text-background cursor-pointer transition">
          Sign up
        </button>
      </div>
      <SignInForm />
    </div>
  );
}
