import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="bg-black border-b border-orange-200 fixed w-full top-0 z-40 backdrop-blur-lg">
            <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="https://yuvrajsinghportfolio.vercel.app/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <img src="/to-do.png" alt="chat" className="w-8 h-8 text-primary"/>
              </div>
              <h1 className="text-lg font-bold text-white">Todo App</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="https://github.com/yuvi-yuvraj" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <img src="/git.png" alt="chat" className="w-10 h-10 text-primary"/>
              </div>
            </Link>
            <Link to="https://www.instagram.com/yuvraj_singh_179/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <img src="/inst.png" alt="chat" className="w-12 h-10 text-primary"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
        </header>
    );
};

export default Navbar;