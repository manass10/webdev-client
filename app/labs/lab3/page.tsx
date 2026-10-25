import Link from "next/link";
import { IfElseDemo, TernaryDemo, InlineConditionalDemo, NullishDemo } from "./ConditionalsDemo";
import JsonStringifyDemo from "./JsonStringifyDemo";
import DestructuringDemo from "./DestructuringDemo";
import ImportsTable from "./ImportsTable";
import StyleObjectsDemo from "./StyleObjectsDemo";
import CssClassesDemo from "./CssClassesDemo";
import ClientPathname from "./ClientPathname";
import ServerInfo from "./ServerInfo";
import TodoList from "./TodoList";
import Add from "./Add";

export default function Lab3() {
  const message = "Hello from Lab 3";
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div id="wd-lab3">
      <h2>Lab 3 - JavaScript and Components</h2>

      <h3>Variables</h3>
      <p>
        let and const declare variables. This message is: {message}
      </p>

      <h3>Functions and Arrow Functions</h3>
      <p>{((a: number, b: number) => a + b)(2, 3)}</p>

      <h3>Arrays</h3>
      <p>{numbers.map((n) => n * 2).join(", ")}</p>

      <h3>Template Literals</h3>
      <p>{`There are ${numbers.length} numbers in the array.`}</p>

      <h3>If Else</h3>
      <IfElseDemo />

      <h3>Ternary Operator</h3>
      <TernaryDemo />

      <h3>Inline Conditional</h3>
      <InlineConditionalDemo />

      <h3>Nullish Coalescing</h3>
      <NullishDemo />

      <h3>Objects</h3>
      <p>Objects group related values under named keys.</p>

      <h3>JSON.stringify</h3>
      <JsonStringifyDemo />

      <h3>Destructuring</h3>
      <DestructuringDemo />

      <h3>Imports: Default, Namespace, and Named</h3>
      <ImportsTable />

      <h3>Optional Chaining</h3>
      <p>(see Destructuring section above for the house.garage?.cars example)</p>

      <h3>Style Objects</h3>
      <StyleObjectsDemo />

      <h3>CSS Classes</h3>
      <CssClassesDemo />

      <h3>Client Component</h3>
      <ClientPathname />

      <h3>Server Component</h3>
      <ServerInfo />

      <h3>Labs TOC Highlight</h3>
      <p>
        Check the Labs TOC on the left — the link for the lab you are
        currently viewing is marked differently from the others.
      </p>

      <h3>Path Parameters</h3>
      <p>
        <Add a={3} b={4} />
      </p>
      {/* On your own: a second direct <Add a={10} b={20} /> */}
      <p>
        <Add a={10} b={20} />
      </p>
      <ul>
        <li>
          <Link href="/labs/lab3/add/12/30">/labs/lab3/add/12/30</Link>
        </li>
        <li>
          <Link href="/labs/lab3/add/7/8">/labs/lab3/add/7/8</Link>
        </li>
        {/* On your own: a third link with numbers of your choice */}
        <li>
          <Link href="/labs/lab3/add/100/250">/labs/lab3/add/100/250</Link>
        </li>
      </ul>

      <h3>Todo List</h3>
      <TodoList />
    </div>
  );
}
