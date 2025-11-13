export default function MemeCard({ meme }) {
  return (
    <div className="border p-2 rounded-md shadow hover:scale-105 transition">
      <img src={meme.url} alt={meme.name} className="w-full rounded-md" />
      <h3 className="mt-2 font-semibold">{meme.name}</h3>
    </div>
  );
}
