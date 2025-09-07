import { Button } from "@/components/ui/button";
import logo from "@/components/Notelogo.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="NoteStack"
                className="h-25 w-auto object-contain bg-white"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to={"/login"}>Sign In</Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to={"/signup"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
