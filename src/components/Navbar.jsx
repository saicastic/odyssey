import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between bg-blue-400 text-white p-4">
        <div className="leftNav">
          <Link href="/">Home</Link>
        </div>
        <div className="middleNav">
          <ul className="flex gap-10">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </div>
        <div className="rightNav">Register Now</div>
      </nav>
    </header>
  );
}
