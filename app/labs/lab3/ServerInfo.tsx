import fs from "fs";
import path from "path";
import os from "os";

export default function ServerInfo() {
  const dir = path.join(process.cwd(), "app", "labs", "lab3");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => !f.startsWith("."));
  } catch {
    files = ["(could not read directory)"];
  }

  return (
    <div>
      <p>Files read on the server from app/labs/lab3:</p>
      <ul>
        {files.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p>Server Information:</p>
      <ul>
        <li>platform: {os.platform()}</li>
        {/* On your own: the Server Information block includes an "arch" key */}
        <li>arch: {os.arch()}</li>
        <li>nodeVersion: {process.version}</li>
      </ul>
    </div>
  );
}
