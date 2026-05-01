import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthForms() {
  const [activeForm, setActiveForm] = useState<"sign-in" | "sign-up">(
    "sign-in",
  );

  function handleSwitchForm(form: typeof activeForm) {
    setActiveForm(form);
  }

  return (
    <div className="w-full h-full flex items-start justify-start flex-col p-12 gap-5 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="bg-slate-800 w-full p-1 grid grid-cols-2 rounded-xl gap-2">
        <button
          onClick={() => handleSwitchForm("sign-in")}
          className={`w-full ${activeForm === "sign-in" ? "bg-primary text-background " : " text-mute hover:bg-primary hover:text-background"} rounded-xl py-2 font-bold cursor-pointer`}
        >
          Sign in
        </button>
        <button
          onClick={() => handleSwitchForm("sign-up")}
          className={`w-full ${activeForm === "sign-up" ? "bg-primary text-background " : " text-mute hover:bg-primary hover:text-background"} rounded-xl py-2 font-bold cursor-pointer`}
        >
          Sign up
        </button>
      </div>
      {activeForm === "sign-in" ? (
        <SignInForm />
      ) : (
        <SignUpForm setActiveForm={setActiveForm} />
      )}
    </div>
  );
}
