import { useEffect, useState } from "react";
import MemeGallery from "./components/MemeGallery";
import SearchBar from "./components/SearchBar";

function App() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes))
      .catch((err) => console.error("Error fetching memes:", err));
  }, []);

  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Meme Template Viewer
      </h1>

      
      <div className="max-w-7xl mx-auto mb-8">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      
      <div className="max-w-7xl mx-auto">
        <MemeGallery memes={filteredMemes} onSelectMeme={setSelectedMeme} />
      </div>

      
      {selectedMeme && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedMeme(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMeme.url}
              alt={selectedMeme.name}
              className="rounded-lg mb-4 w-full"
            />
            <h2 className="text-lg font-semibold mb-3">{selectedMeme.name}</h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={() => setSelectedMeme(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
