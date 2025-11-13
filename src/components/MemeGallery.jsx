import MemeCard from "./MemeCard";

export default function MemeGallery({ memes }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {memes.map(meme => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}
