import MemeCard from "./MemeCard";

export default function MemeGallery({ memes, onSelectMeme }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} onClick={() => onSelectMeme(meme)} />
      ))}
    </div>
  );
}
