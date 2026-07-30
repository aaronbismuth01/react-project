export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-stone-900 text-amber-50 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
      <h1 className="text-xl font-bold">
        My <span className="text-green-400">Library</span>
      </h1>
      <nav className="flex gap-5 text-sm font-semibold">
        <a href="#home" className="hover:text-green-400">Home</a>
        <a href="#library" className="hover:text-green-400">Library</a>
        <a href="#favorites" className="hover:text-green-400">Favorites</a>
      </nav>
    </header>
  );
}