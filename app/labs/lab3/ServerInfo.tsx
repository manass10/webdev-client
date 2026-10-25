import fs from "fs";
import path from "path";

export default function ServerInfo() {
  const platform = process.platform;
  const nodeVersion = process.version;
  const arch = process.arch;
  const dir = path.join(process.cwd(), "app", "labs", "lab3");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => !f.startsWith("."));
  } catch {
    files = [];
  }

  return (
    <div>
      <h2>Server Information</h2>
      <pre>{JSON.stringify({ platform, nodeVersion, arch }, null, 2)}</pre>
      <p>Files read on the server from app/labs/lab3:</p>
      <ul>
        {files.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
