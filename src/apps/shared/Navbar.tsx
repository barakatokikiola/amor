import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden font-mono sm:flex h-12 justify-center gap-12 w-full items-center text-center text-black uppercase">
      <Link
        href="/about"
        className="text-sm font-medium  tracking-wider"
      >
        About
      </Link>
      <Link
        href="/men"
        className="text-sm font-medium  tracking-wider"
      >
        Men
      </Link>
      <Link
        href="/women"
        className="text-sm font-medium  tracking-wider"
      >
        Women
      </Link>
      <Link
        href="/new-in"
        className="text-sm font-medium  tracking-wider"
      >
        New In
      </Link>
      <Link
        href="/materials"
        className="text-sm font-medium  tracking-wider"
      >
        Materials
      </Link>
    </nav>
  );
}
