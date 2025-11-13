import { useEffect, useState } from "react";
import MemeGallery from "./MemeGallery";
import SearchBar from "./SearchBar";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemes(data.data.memes));
  }, []);

  const filteredMemes = memes.filter(meme =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Meme Gallery</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <MemeGallery memes={filteredMemes} />
    </div>
  );
}
