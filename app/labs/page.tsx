import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      {/*
        TODO (Delivery §1.7 - Name and section, 3 pts): replace with your
        full Canvas name, first then last, matching the roster exactly.
        There is no checkbox/control for this — it just needs to be visible
        text on this page.
      */}
      <p id="wd-name-section">Manas Suresh Salian</p>

      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
      </ul>
      <Link href="/account/signin" id="wd-kambaz-link">
        Kambaz
      </Link>

      {/*
        TODO (Delivery §1.5 - GitHub repository, 3 pts): replace with your
        own public webdev-client (or kambaz-next-js) repo URL. This is
        different from the wd-github id in Lab1/AnchorTag.tsx, which is the
        book's own sample link and should stay as-is.
      */}
      <br />
      <a
        href="https://github.com/TODO-your-username/webdev-client"
        id="wd-github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
