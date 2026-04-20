import AvatarImage from "/Me.jpg";
export default function Avatar() {
  return (
    <div className="size-10 rounded-full  overflow-hidden justify-self-end">
      <img src={AvatarImage} alt="logo" className="w-full h-full" />
    </div>
  );
}
