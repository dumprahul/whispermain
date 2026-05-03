import WebGLBackdrop from "@/components/WebGLBackdrop";

const REPO = "https://github.com/krishnan74/whisper-network";
const ENS_AXL = "https://sepolia.app.ens.domains/axl.eth";
const ENS_AXL_SUBNAMES = "https://sepolia.app.ens.domains/axl.eth?tab=subnames";
const AXL_DOCS = "https://docs.gensyn.ai/tech/agent-exchange-layer";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="h-3 w-3 shrink-0"
        style={{
          borderRadius: "999px",
          background: "var(--alive)",
          boxShadow:
            "0 0 0 6px color-mix(in oklab, var(--alive) 18%, transparent)",
        }}
        aria-hidden
      />
      <span
        className="text-[1.75rem] font-medium tracking-[-0.02em] sm:text-[2rem]"
        style={{ color: "var(--ink)" }}
      >
        whisper
      </span>
    </div>
  );
}

function MonoLink({
  href,
  children,
  className = "",
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-1 underline-offset-[3px] transition-opacity hover:opacity-70 ${className}`}
      style={{ color: "var(--ink)", ...style }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg)" }}>
      <WebGLBackdrop />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1480px] flex-col px-6 pb-24 pt-10 sm:px-10 md:px-16 lg:px-20">
        <header
          className="flex flex-wrap items-center justify-between gap-6 border-b pb-8"
          style={{ borderColor: "var(--rule)" }}
        >
          <Wordmark />
          <nav
            className="pointer-events-auto flex flex-wrap items-center gap-x-8 gap-y-2 md:gap-x-10"
            aria-label="Primary"
          >
            <a
              href="#start"
              className="font-mono text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
            >
              Start a node
            </a>
            <a
              href="#ens"
              className="font-mono text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
            >
              ENS
            </a>
            <a
              href="#axl"
              className="font-mono text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
            >
              AXL
            </a>
            <a
              href="#product"
              className="font-mono text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
            >
              Product
            </a>
            <a
              href="#fault"
              className="font-mono text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
            >
              Fault tolerance
            </a>
          </nav>
        </header>

        <main className="flex flex-1 flex-col pt-14 md:pt-20 lg:pt-24">
          <section className="max-w-[960px]">
            <p
              className="mb-6 font-mono text-[13px] uppercase tracking-[0.12em]"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
            >
              Whisper network
            </p>
            <h1
              className="text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em]"
              style={{ color: "var(--ink)" }}
            >
              Compute
              <br />
              without a
              <br />
              coordinator.
            </h1>
            <p
              className="mt-8 max-w-[680px] text-[clamp(1.125rem,2.2vw,1.5rem)] leading-[1.35]"
              style={{ color: "var(--ink-2)" }}
            >
              A trustless AI agent compute market on{" "}
              <MonoLink href={AXL_DOCS}>Gensyn AXL</MonoLink>. Providers join an
              encrypted P2P mesh; jobs are auctioned and executed with
              gossip-replicated ledger state — no central broker. Identity maps
              through <strong style={{ fontWeight: 500 }}>ENS</strong> (
              <MonoLink href={ENS_AXL}>axl.eth</MonoLink> on Sepolia); transport
              and signing ride <strong style={{ fontWeight: 500 }}>AXL</strong>.
            </p>

            <div className="pointer-events-auto mt-12 flex flex-wrap items-center gap-4">
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border px-8 font-mono text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--ink)",
                  borderColor: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                Clone on GitHub
              </a>
              <a
                href="#start"
                className="inline-flex min-h-12 items-center justify-center border bg-transparent px-8 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors hover:border-[var(--ink)]"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: "var(--rule)",
                  color: "var(--ink)",
                }}
              >
                Run locally
              </a>
              <a
                href="#ens"
                className="inline-flex min-h-12 items-center justify-center border border-transparent bg-transparent px-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-3)",
                }}
              >
                axl.eth →
              </a>
            </div>
          </section>

          <section
            id="start"
            className="mt-24 border-t pt-16 md:mt-28 md:pt-20"
            style={{ borderColor: "var(--rule)" }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6 md:pb-8">
              <h2
                className="text-[clamp(1.75rem,4vw,2.85rem)] font-medium tracking-[-0.025em]"
                style={{ color: "var(--ink)" }}
              >
                Start a node
              </h2>
              <span
                className="font-mono text-[11px] tracking-[0.1em] text-[var(--ink-3)] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                krishnan74 / whisper-network
              </span>
            </div>

            <div className="grid gap-12 pt-10 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
              <div>
                <p
                  className="text-lg leading-relaxed md:text-xl"
                  style={{ color: "var(--ink-2)" }}
                >
                  Clone the open-source repo, run the AXL-backed provider mesh
                  locally, and open the Web UI. Python 3.11+, the bundled{" "}
                  <code className="font-mono text-[0.85em]" style={{ color: "var(--ink)" }}>
                    axl/node
                  </code>{" "}
                  binary, and optionally Ollama for real inference — see the
                  README for Docker, tuning, and demos.
                </p>
                <ul
                  className="mt-8 list-none space-y-3 pl-0 font-mono text-[13px] leading-relaxed md:text-sm"
                  style={{ color: "var(--ink-2)", fontFamily: "var(--font-mono)" }}
                >
                  <li style={{ borderLeft: "2px solid var(--alive)", paddingLeft: 14 }}>
                    <span style={{ color: "var(--ink)" }}>Optional ·</span>{" "}
                    <code>JUSTANAME_API_KEY</code> in{" "}
                    <code>.env</code> enables ENS subname self-registration at
                    startup (Sepolia).
                  </li>
                  <li style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 14 }}>
                    <span style={{ color: "var(--ink)" }}>Verify ·</span>{" "}
                    <code>./demo/verify.sh</code> and{" "}
                    <code>./demo/judge_demo.sh</code> for fault-tolerance checks.
                  </li>
                  <li style={{ borderLeft: "2px solid var(--rule)", paddingLeft: 14 }}>
                    <span style={{ color: "var(--ink)" }}>P2P submit ·</span>{" "}
                    <code>python -m demo.submit_p2p</code> — task in and result out
                    over AXL only.
                  </li>
                </ul>
              </div>
              <div>
                <p
                  className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em]"
                  style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
                >
                  Quickstart
                </p>
                <pre
                  className="overflow-x-auto border p-6 text-[12px] leading-[1.65] whitespace-pre-wrap"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-2)",
                    borderColor: "var(--rule)",
                    color: "var(--ink-2)",
                  }}
                >
{`git clone https://github.com/krishnan74/whisper-network.git
cd whisper-network

# Optional: ENS registration on Sepolia (JustaName)
# echo "JUSTANAME_API_KEY=your_key" >> .env

# Optional: Ollama for real LLM inference
# ollama pull llama3.2 && OLLAMA_NUM_PARALLEL=6 ollama serve &

FAST_MODE=1 ./run_local.sh
.venv/bin/python -m demo.webui
# Web UI → http://localhost:5000`}
                </pre>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
                  Variable provider count:{` `}
                  <code className="font-mono text-[13px]" style={{ color: "var(--ink-2)" }}>
                    ./run_local.sh --count 3
                  </code>
                  ; match ports in the README for{" "}
                  <code className="font-mono text-[13px]">demo.webui</code>.
                </p>
              </div>
            </div>
          </section>

          <section
            id="ens"
            className="mt-20 border-t pt-16 md:mt-24 md:pt-20"
            style={{ borderColor: "var(--rule)" }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6">
              <h2
                className="max-w-[720px] text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.025em]"
                style={{ color: "var(--ink)" }}
              >
                ENS · identity layer
              </h2>
              <span
                className="font-mono text-sm tracking-[0.08em] text-[var(--ink-3)] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Sepolia · axl.eth
              </span>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p
                  className="text-lg leading-relaxed md:text-xl"
                  style={{ color: "var(--ink-2)" }}
                >
                  Human-readable names anchor machine identity. Whisper stores
                  AXL peer material and provider metadata (capabilities, pricing,
                  shard) in ENS text records so peers resolve each other without
                  a centralized directory.
                </p>
                <p className="mt-6 leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  The Whisper namespace on Sepolia is{" "}
                  <strong style={{ fontWeight: 500, color: "var(--ink)" }}>
                    axl.eth
                  </strong>
                  . Inspect the parent and every issued subname on ENS:
                </p>
                <div className="mt-8 flex flex-col gap-3 font-mono text-[13px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                  <MonoLink
                    href={ENS_AXL}
                    className="font-mono decoration-[var(--rule)]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--alive)" }}
                  >
                    axl.eth on ENS
                  </MonoLink>
                  <span style={{ color: "var(--ink-3)" }} aria-hidden>
                    ·
                  </span>
                  <MonoLink
                    href={ENS_AXL_SUBNAMES}
                    className="font-mono"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--gold)" }}
                  >
                    Browse subnames
                  </MonoLink>
                </div>
              </div>
              <div
                className="border p-8"
                style={{ borderColor: "var(--rule)", background: "var(--bg-2)" }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.12em]"
                  style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}
                >
                  Name hierarchy (example pattern)
                </p>
                <ol
                  className="mt-6 list-decimal space-y-4 pl-5 text-base leading-relaxed"
                  style={{ color: "var(--ink-2)" }}
                >
                  <li>
                    <strong style={{ fontWeight: 500, color: "var(--ink)" }}>
                      Parent
                    </strong>{" "}
                    — root name delegates subnames ({`e.g.`} a project parent like{" "}
                    <code className="font-mono text-[13px] text-[var(--ink)]">notdocker.eth</code>{" "}
                    in generic tutorials, or the live Whisper parent{" "}
                    <code className="font-mono text-[13px] text-[var(--alive)]">
                      axl.eth
                    </code>
                    ).
                  </li>
                  <li>
                    <strong style={{ fontWeight: 500, color: "var(--ink)" }}>
                      Node subname
                    </strong>{" "}
                    — register under the parent ({`e.g.`}{" "}
                    <code className="font-mono text-[13px]">
                      node.axl.eth
                    </code>{" "}
                    or{" "}
                    <code className="font-mono text-[13px]">
                      node1.notdocker.eth
                    </code>{" "}
                    in sample configs).
                  </li>
                  <li>
                    <strong style={{ fontWeight: 500, color: "var(--ink)" }}>
                      Nested subnames
                    </strong>
                    — use the node name as parent for finer identities ({`e.g.`}{" "}
                    <code className="font-mono text-[13px]">
                      agent1.node.axl.eth
                    </code>
                    ,{" "}
                    <code className="font-mono text-[13px]">
                      agent2.node.axl.eth
                    </code>
                    , …) so each agent retains a stable ENS path tied to keys and
                    policy.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section
            id="axl"
            className="mt-20 border-t pt-16 md:mt-24 md:pt-20"
            style={{ borderColor: "var(--rule)" }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6">
              <h2
                className="max-w-[640px] text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.025em]"
                style={{ color: "var(--ink)" }}
              >
                AXL · network layer
              </h2>
              <MonoLink
                href={AXL_DOCS}
                className="font-mono text-[11px] uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-3)",
                  textDecorationColor: "var(--rule)",
                }}
              >
                Read the docs →
              </MonoLink>
            </div>

            <p
              className="mt-8 max-w-[800px] text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--ink-2)" }}
            >
              <a
                href={AXL_DOCS}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--rule)] underline-offset-[3px]"
                style={{ fontWeight: 500, color: "var(--ink)" }}
              >
                Agent eXchange Layer (AXL)
              </a>{" "}
              is Gensyn’s peer-to-peer node: encrypted transport, outbound NAT-friendly
              meshing, and a local HTTP bridge (typically{" "}
              <code className="font-mono text-[0.85em]" style={{ color: "var(--ink)" }}>
                localhost:9002
              </code>
              ). Whisper treats that node as authoritative for who is reachable,
              routes gossip and auctions across it, and signs ledger updates with the
              same ed25519 material AXL exposes.
            </p>

            <div className="mt-12 grid gap-0 border md:grid-cols-2" style={{ borderColor: "var(--rule)" }}>
              {[
                {
                  mono: "Transport",
                  text: "Jobs, bids, awards, and results move as encrypted AXL traffic — Whisper does not bolt on a second wire protocol.",
                },
                {
                  mono: "Identity",
                  text: "Each provider's AXL ed25519 key is cluster identity and signing key for gossip ledger updates.",
                },
                {
                  mono: "Topology",
                  text: "`GET /topology` tracks the live mesh so membership mirrors who is actually routable.",
                },
                {
                  mono: "Local bridge",
                  text: "Any stack can POST `/send`, poll `/recv`, and compose higher-level auctions on top.",
                },
              ].map((row) => (
                <div
                  key={row.mono}
                  className="border-b p-8 md:border-r md:border-b-0 [&:nth-child(even)]:md:border-r-0 last:border-b-0 md:[&:nth-child(n+3)]:border-t"
                  style={{
                    borderColor: "var(--rule)",
                  }}
                >
                  <div
                    className="font-mono text-[12px] font-medium uppercase tracking-[0.08em]"
                    style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}
                  >
                    {row.mono}
                  </div>
                  <p className="mt-3 leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    {row.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="product"
            className="mt-20 grid gap-10 border-t pt-16 md:mt-24 md:grid-cols-3 md:gap-12 md:pt-20"
            style={{ borderColor: "var(--rule)" }}
          >
            {[
              {
                title: "No coordinator bottleneck.",
                body: "Job state replicas across providers in real time. When a node dies, gossip detects it, leases expire, survivors reclaim work — without a central API saving you.",
              },
              {
                title: "ENS names, AXL paths.",
                body: "`axl.eth` subnames advertise who you are off-chain and on ENS; AXL wires the bytes. Same separation as docs: naming vs pipe.",
              },
              {
                title: "Auctions over the mesh.",
                body: "Bid requests broadcast to alive peers (~400 ms auction window), awards travel signed over AXL, execution starts immediately — not after a polling loop.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h2
                  className="text-xl font-medium tracking-[-0.015em] md:text-[22px]"
                  style={{ color: "var(--ink)" }}
                >
                  {item.title}
                </h2>
                <p
                  className="mt-3 text-base leading-[1.55] md:text-lg"
                  style={{ color: "var(--ink-2)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </section>

          <section
            id="fault"
            className="mt-20 border md:mt-28"
            style={{
              borderColor: "var(--rule)",
              background: "var(--bg-2)",
            }}
          >
            <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
              <div
                className="border-b p-8 md:border-b-0 md:border-r md:p-12"
                style={{ borderColor: "var(--rule)" }}
              >
                <p
                  className="font-mono text-[12px] uppercase tracking-[0.1em]"
                  style={{
                    color: "var(--ink-3)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Fault tolerance
                </p>
                <p
                  className="mt-6 text-[clamp(4rem,12vw,6.5rem)] font-medium leading-none tracking-[-0.035em]"
                  style={{ color: "var(--ink)" }}
                >
                  50
                  <span
                    className="text-[40%] font-medium"
                    style={{ color: "var(--ink-3)" }}
                  >
                    %
                  </span>
                </p>
                <p
                  className="mt-4 max-w-[320px] text-sm leading-relaxed"
                  style={{ color: "var(--ink-2)" }}
                >
                  Lose half the cluster — the mesh finishes in-flight inference
                  after fast-suspect failure detection (~9 s rescue in FAST_MODE
                  demos).
                </p>
              </div>
              <div className="p-8 md:p-12">
                <p
                  className="font-mono text-[12px] uppercase tracking-[0.1em]"
                  style={{
                    color: "var(--alive)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Surviving quorum
                </p>
                <p
                  className="mt-6 text-[clamp(3rem,8vw,4.25rem)] font-medium leading-none tracking-[-0.03em]"
                  style={{ color: "var(--alive)" }}
                >
                  3
                  <span
                    className="text-[50%] font-medium"
                    style={{ color: "var(--ink-3)" }}
                  >
                    /6
                  </span>
                </p>
                <p
                  className="mt-4 max-w-[380px] text-sm leading-relaxed"
                  style={{ color: "var(--ink-2)" }}
                >
                  Quorum guards shard affinity and threshold decryption. Survivors
                  subtract confirmed-dead peers from effective cluster size so
                  orphaned leases get claimed legally.
                </p>
              </div>
            </div>
          </section>

          <section id="spec" className="mt-20 md:mt-28">
            <div
              className="flex flex-wrap items-end justify-between gap-4 border-b pb-6"
              style={{ borderColor: "var(--rule)" }}
            >
              <h2
                className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.025em]"
                style={{ color: "var(--ink)" }}
              >
                Stack primitives
              </h2>
              <span
                className="font-mono text-sm tracking-[0.08em] text-[var(--ink-3)] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                From the repo README
              </span>
            </div>
            <div>
              {[
                {
                  label: "Ledger",
                  text: "Lease-based ownership, version-vector merges, ed25519-signed gossip, optional Shamir threshold encryption per task.",
                },
                {
                  label: "Membership",
                  text: "SWIM-lite heartbeats plus AXL-triggered fast-suspect when the mesh drops a peer.",
                },
                {
                  label: "Runtime",
                  text: "Price auction winner claims immediately; 5 s scan fallback; shard-affinity prefers home shards before rescue.",
                },
                {
                  label: "ENS records",
                  text: "`axl.peer_id`, capabilities, `price_axl`, `shard_id` — mirrored from what providers publish at startup.",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid gap-4 border-b py-6 md:grid-cols-[160px_1fr] md:items-start md:gap-10"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <div
                    className="font-mono text-[12px] font-medium uppercase tracking-[0.08em]"
                    style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}
                  >
                    {row.label}
                  </div>
                  <p
                    className="text-sm leading-relaxed md:text-base"
                    style={{ color: "var(--ink-2)" }}
                  >
                    {row.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="mt-16 flex flex-wrap items-start justify-between gap-8 border-t pt-10 md:mt-24"
            style={{ borderColor: "var(--rule)" }}
          >
            <div className="flex flex-col gap-6">
              <Wordmark className="opacity-90" />
              <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.08em]">
                <MonoLink href={REPO}>GitHub</MonoLink>
                <MonoLink href={ENS_AXL}>axl.eth</MonoLink>
                <MonoLink href={ENS_AXL_SUBNAMES}>Subnames</MonoLink>
                <MonoLink href={AXL_DOCS}>AXL docs</MonoLink>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <span
                className="inline-flex border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: "var(--alive)",
                  color: "var(--alive)",
                }}
              >
                ● alive
              </span>
              <span
                className="inline-flex border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: "var(--gold)",
                  color: "var(--gold)",
                }}
              >
                ● auction
              </span>
              <span
                className="inline-flex border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: "var(--dead)",
                  color: "var(--dead)",
                }}
              >
                ● dead
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
