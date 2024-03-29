import ActionButtons from "./ActionButtons";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b-2">
      <Logo />
      <Navigation />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
