import NavbarDesktop from "./desktop/NavbarDesktop";
import NavbarMobile from "./mobile/NavbarMobile";

export default function Navbar() {
  return (
    <nav className="w-full relative">
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
}
