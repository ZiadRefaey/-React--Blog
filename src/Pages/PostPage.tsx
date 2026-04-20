import Main from "../components/Main";
import Comment from "../components/Comment";
import AddComment from "../components/AddComment";

export default function PostPage() {
  return (
    <Main className="pb-10">
      <h1 className="text-5xl font-bold text-mute max-w-xl leading-16">
        The Fractured <span className="text-primary ">Sovereign’s Legacy.</span>
      </h1>
      <p className="text-lg text-mute-secondary mt-5 max-w-2xl">
        An exhaustive exploration into Viego’s evolving role in the current meta
        and the narrative weight of the Camavoran tragedy.
      </p>
      <div>
        <div className="w-full h-100 object-cover mt-10 rounded-xl overflow-hidden">
          <img
            src="/PostedImage.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <p className="text-mute-secondary mt-10">
        The Ruined King has long been a specter over Runeterra, but his arrival
        as a playable entity transformed the tactical landscape of the jungle.
        In this archive entry, we dissect the shifting paradigms of possession
        mechanics and why "The Ruination" is more than just a thematic hook—it
        is a gameplay philosophy.
      </p>
      <div className="w-full relative  bg-card-background rounded-xl p-6 pr-18 my-10">
        <img src="/Quote.svg" className="absolute top-6 right-6" />
        <p className="text-mute-secondary text-2xl font-bold">
          "His power is not in what he possesses, but in how he discards what he
          no longer needs. It is the ultimate expression of predatory
          evolution."
        </p>
        <p className="text-tertiary-text font-bold mt-4">
          — Lead Designer Insight
        </p>
      </div>
      <div className="flex items-center justify-start w-full">
        <p className="text-xl text-mute font-bold mb-6">
          The Discussion <span className="text-primary">(14)</span>
        </p>
      </div>
      <Comment />
      <AddComment />
    </Main>
  );
}
