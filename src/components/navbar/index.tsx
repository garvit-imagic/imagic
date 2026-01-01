import NavbarDesktop from "../desktop/NavbarDesktop";
import NavbarMobile from "../mobile/NavbarMobile";

export default function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </>
  );
}
