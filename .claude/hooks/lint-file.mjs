import { execFileSync } from "node:child_process";

let raw = "";
for await (const chunk of process.stdin) raw += chunk;
const file = JSON.parse(raw).tool_input?.file_path;

if (!file || !/\.(tsx?|jsx?|mjs)$/.test(file)) process.exit(0);

try {
  execFileSync("npm", ["run", "lint", "--silent", "--", "--fix", file], {
    stdio: "pipe",
  });
} catch (e) {
  process.stderr.write(e.stdout?.toString() || e.message);
  process.exit(2);
}
