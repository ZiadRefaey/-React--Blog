import AuthDetails from "../components/AuthDetails";
import AuthForms from "../components/AuthForms";
import Main from "../components/Main";

export default function Authentication() {
  return (
    <Main className="relative items-center justify-center flex h-screen">
      <div className="w-full h-[80%] bg-card-background grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
        <AuthDetails />
        <AuthForms />
      </div>
    </Main>
  );
}
