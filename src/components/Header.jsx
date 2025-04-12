function Header() {
    return (
      <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black to-transparent fixed w-full z-10">
        <h1 className="text-3xl font-bold text-red-600">MOVIEFLIX</h1>
        <nav className="space-x-4 text-white text-lg">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">Series</a>
          <a href="#" className="hover:text-red-500 transition">My List</a>
        </nav>
      </header>
    )
  }
  
  export default Header;
  