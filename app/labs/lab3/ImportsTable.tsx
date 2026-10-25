import mathLib from "./mathLib";
import * as MathLib from "./mathLib";
import { add, multiply } from "./mathLib";

export default function ImportsTable() {
  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Default import (mathLib.add)</th>
          <th>Namespace import (MathLib.add)</th>
          <th>Named import (add)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>add(2, 3)</td>
          <td>{mathLib.add(2, 3)}</td>
          <td>{MathLib.add(2, 3)}</td>
          <td>{add(2, 3)}</td>
        </tr>
        <tr>
          <td>multiply(2, 3)</td>
          <td>{mathLib.multiply(2, 3)}</td>
          <td>{MathLib.multiply(2, 3)}</td>
          <td>{multiply(2, 3)}</td>
        </tr>
        <tr>
          <td>square(4)</td>
          <td>{mathLib.square(4)}</td>
          <td>{MathLib.default.square(4)}</td>
          <td>{mathLib.square(4)}</td>
        </tr>
        <tr>
          <td>add(5, 5)</td>
          <td>{mathLib.add(5, 5)}</td>
          <td>{MathLib.add(5, 5)}</td>
          <td>{add(5, 5)}</td>
        </tr>
        {/* On your own: fifth row for add(10, 20) — each cell shows 30 */}
        <tr>
          <td>add(10, 20)</td>
          <td>{mathLib.add(10, 20)}</td>
          <td>{MathLib.add(10, 20)}</td>
          <td>{add(10, 20)}</td>
        </tr>
      </tbody>
    </table>
  );
}
