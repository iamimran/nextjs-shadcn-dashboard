import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LuAlignJustify } from "react-icons/lu";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Site navigation menu</SheetDescription>
            </SheetHeader>
            <nav>
              <ul>
                <li>
                  <Link href="/about">Sign In</Link>
                </li>
                <li>
                  <Link href="/contact">Get Started</Link>
                </li>
                <li>
                  <Link href="/contact">Pricing</Link>
                </li>
                <li>
                  <Link href="/contact">Features</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/contact">About Us</Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          Sign In
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button>
      </div>
    </div>
  );
};

export default ActionButtons;
