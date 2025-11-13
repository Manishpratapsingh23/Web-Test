export default function MemeCard({ meme, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer overflow-hidden"
    >
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full h-64 object-cover"
      />
      <p className="p-3 font-medium text-gray-700 truncate">{meme.name}</p>
    </div>
  );
}
