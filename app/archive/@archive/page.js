import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const links = getAvailableNewsYears(); // Fixed function call

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
