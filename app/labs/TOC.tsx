import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      {/* TODO (On your own): replace with your name, a motto, or a link back to the book */}
      <p>Manas Suresh Salian — &quot; Learning by Doing&quot;</p>

      <ul>
        <li>
          <Link href="/labs">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/account/signin">Kambaz</Link>
        </li>
        {/* With AI: Chapter 1 book link — expected to 404 in this app */}
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}
