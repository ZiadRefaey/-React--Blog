import { formatDate, getInitial } from "../utils/utils";

export default function Comment({
  content,
  userName,
  date,
}: {
  content: string;
  userName: string;
  date: string;
}) {
  return (
    <div className="w-full p-4 rounded-xl bg-card-background flex items-start justify-center flex-col text-mute">
      <div className="flex items-center justify-start">
        <div className="rounded-xl bg-background size-14 text-primary font-bold text-xl flex items-center justify-center mr-4 aspect-square">
          {getInitial(userName)}
        </div>
        <div className="flex items-start justify-center text-sm flex-col">
          <p>{userName}</p>
          <p className="font-light text-xs text-mute-secondary">
            {formatDate(date)}
          </p>
        </div>
      </div>
      <p className="font-light text-mute-secondary mt-4 pb-4">{content}</p>
    </div>
  );
}
