# NS Terminal sidecar (Linux/web)

Extracted verbatim from the Bun standalone `sidecar.exe` (Bun 1.4.3) via its
module graph, plus the embedded text module and zstd wasm.

- `main.js` — module 0 (11,158,246 B). Two absolute `B:/~BUN/root/...` paths were
  rewritten to relative paths so the bundle resolves under Linux.
- `standalone-bc04n24k.js` is UTF-16LE text served to the client; it is stored as
  `.txt` so `require()` returns its text instead of parsing it as JS.
- `zstd-50dt8pxq.wasm` — transport helper read via `readFileSync("./...")`.

Runs with: `bun run main.js --car=<db|stream|tasks|api-mcp>` (cwd = this directory).

Ports: db 9500, stream 9501, tasks 9502, api-mcp 9503, Triplit 6543.
