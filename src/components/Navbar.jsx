import { Button } from "@/components/ui/button";
import logo from "@/assets/Nlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b px-4 md:px-6 shadow-md bg-white">
      <div className="flex h-24 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="NoteStack"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to={"/login"}>Sign In</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="text-sm bg-[#0072FF] hover:bg-[#00BFFF]"
          >
            <Link to={"/signup"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
