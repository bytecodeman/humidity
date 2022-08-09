function Navbar() {
  return (
    <nav>
      <div className="bg-primary w-full h-10">
        <div className="container mx-auto h-full">
          <div className="w-3/4 mx-auto flex items-center justify-between h-full">
            <div className="text-white text-xl">
              <a href="/specialapps/">Special Apps</a>
            </div>
            <div className="text-white">
              <a href="/">bytecodeman.com</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
