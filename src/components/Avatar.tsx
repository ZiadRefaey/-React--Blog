import { useState } from "react";
import { UserAuth } from "../providers/AuthContext";
import { getInitial } from "../utils/utils";
import LogoutIcon from "./Icons/LogoutIcon";
import Modal from "./Modal";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
export default function Avatar() {
  const navigate = useNavigate();
  const { session, signOut } = UserAuth();
  const user = session?.user.email;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="size-10 rounded-full  overflow-hidden justify-self-end bg-primary/40 flex items-center justify-center font-bold text-xl uppercase cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {user ? (
          <p className="group-hover:hidden">{getInitial(user)}</p>
        ) : (
          <p className="group-hover:hidden">?</p>
        )}
        <div className="hidden opacity-0 group-hover:block group-hover:opacity-100 transition ">
          <LogoutIcon />
        </div>
      </button>
      <Modal
        isOpen={isModalOpen}
        content={"Are you sure you want to logout?"}
        title="Sign-out"
        error={null}
        isLoading={false}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onComplete={() => {
          signOut();
          setIsModalOpen(false);
          navigate("/auth");
          toast.success("Successfully logged out");
        }}
      />
    </>
  );
}
