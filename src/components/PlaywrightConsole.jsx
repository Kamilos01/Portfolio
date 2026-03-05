import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// #region data
const CMD = "npx playwright test";

const TEST_LINES = [
  {
    browser: "chromium",
    file: "auth/login.spec.ts",
    line: 5,
    title: "should login successfully",
    ms: "823ms",
  },
  {
    browser: "firefox",
    file: "api/users.spec.ts",
    line: 8,
    title: "GET /users returns 200",
    ms: "312ms",
  },
  {
    browser: "webkit",
    file: "ui/dashboard.spec.ts",
    line: 12,
    title: "renders charts correctly",
    ms: "1.1s",
  },
  {
    browser: "chromium",
    file: "e2e/checkout.spec.ts",
    line: 20,
    title: "completes purchase flow",
    ms: "2.3s",
  },
  {
    browser: "firefox",
    file: "auth/session.spec.ts",
    line: 44,
    title: "refreshes token silently",
    ms: "0.9s",
  },
  {
    browser: "webkit",
    file: "api/search.spec.ts",
    line: 3,
    title: "search returns ranked results",
    ms: "440ms",
  },
  {
    browser: "chromium",
    file: "ui/settings.spec.ts",
    line: 31,
    title: "saves user preferences",
    ms: "1.7s",
  },
  {
    browser: "firefox",
    file: "e2e/signup.spec.ts",
    line: 9,
    title: "validates email format",
    ms: "205ms",
  },
  {
    browser: "webkit",
    file: "ui/notifications.spec.ts",
    line: 17,
    title: "shows real-time alerts",
    ms: "0.6s",
  },
  {
    browser: "chromium",
    file: "api/auth.spec.ts",
    line: 22,
    title: "POST /login returns JWT",
    ms: "380ms",
  },
];

const MAX_VISIBLE = 8;
const LINE_INTERVAL = 190; // ms per test line during phase 3
// Phase 3 spans 1400–8000 ms → ~6600 ms → ~34 lines shown
// #endregion

// #region keyframes
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const glowPulse = keyframes`
  0%, 100% { text-shadow: 0 0 4px rgba(74, 222, 128, 0.4); }
  50%       { text-shadow: 0 0 14px rgba(74, 222, 128, 0.9); }
`;
// #endregion

// #region styled-components
const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  font-family: "JetBrains Mono", "Courier New", monospace;
  font-size: 0.78rem;
  line-height: 1.5;
  animation: ${({ $fading }) => ($fading ? fadeOut : fadeIn)} 0.5s ease forwards;
`;

const Window = styled.div`
  background: #1a1a2e;
  border: 1px solid #2d2d4e;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(97, 219, 251, 0.15);
  overflow: hidden;
`;

const TitleBar = styled.div`
  background: #12122a;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #2d2d4e;
`;

const TrafficLight = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

const TitleText = styled.span`
  margin-left: 8px;
  color: #a0a0b8;
  font-size: 0.72rem;
`;

const Body = styled.div`
  padding: 14px 16px;
  min-height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Prompt = styled.div`
  color: #e2e2e2;
  margin-bottom: 10px;
  white-space: nowrap;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1em;
  background: #61dbfb;
  vertical-align: text-bottom;
  margin-left: 1px;
  animation: ${blink} 1s step-end infinite;
`;

const StartupLine = styled.div`
  color: #a0a0b8;
  margin-bottom: 8px;
  animation: ${fadeIn} 0.4s ease forwards;
`;

const LinesWindow = styled.div`
  flex: 1;
  overflow: hidden;
`;

const TestLine = styled.div`
  animation: ${slideUp} 0.18s ease forwards;
  margin-bottom: 2px;
`;

const Check = styled.span`
  color: #4ade80;
  margin-right: 4px;
`;

const BrowserTag = styled.span`
  color: #61dbfb;
`;

const FilePath = styled.span`
  color: #a0a0b8;
`;

const TestTitle = styled.div`
  color: #c8c8d8;
  padding-left: 20px;
  font-size: 0.72rem;
`;

const Summary = styled.div`
  margin-top: 12px;
  color: #4ade80;
  font-weight: 700;
  animation:
    ${glowPulse} 1.5s ease-in-out infinite,
    ${fadeIn} 0.5s ease forwards;
`;

const Dots = styled.div`
  color: #a0a0b8;
  margin: 4px 0;
  animation: ${fadeIn} 0.4s ease forwards;
`;

const CounterBadge = styled.span`
  margin-left: auto;
  color: #4ade80;
  font-size: 0.68rem;
`;

const FailMark = styled.span`
  color: #f87171;
  margin-right: 4px;
`;

const RetryMark = styled.span`
  color: #fbbf24;
  margin-right: 4px;
`;
// #endregion

// #region helpers
function buildPromptText(typed) {
  return `$ ${typed}`;
}
// #endregion

// #region component
const PlaywrightConsole = () => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- reduced-motion: show static final state immediately ---
  if (prefersReduced) {
    return (
      <Wrapper
        role="img"
        aria-label="Animated Playwright test run showing 100 tests passed"
        $fading={false}
      >
        <Window>
          <TitleBar>
            <TrafficLight $color="#ff5f57" />
            <TrafficLight $color="#ffbd2e" />
            <TrafficLight $color="#28c840" />
            <TitleText>playwright test</TitleText>
          </TitleBar>
          <Body>
            <Prompt>$ {CMD}</Prompt>
            <StartupLine>Running 100 tests using 4 workers</StartupLine>
            <LinesWindow>
              {TEST_LINES.slice(0, MAX_VISIBLE).map((t, i) => (
                <TestLine key={i}>
                  <Check>✓</Check>
                  <BrowserTag>[{t.browser}]</BrowserTag>{" "}
                  <FilePath>
                    › {t.file}:{t.line}
                  </FilePath>
                  <TestTitle>
                    {t.title} ({t.ms})
                  </TestTitle>
                </TestLine>
              ))}
            </LinesWindow>
            <Summary>100 passed (28.4s)</Summary>
          </Body>
        </Window>
      </Wrapper>
    );
  }

  return <AnimatedConsole />;
};

const AnimatedConsole = () => {
  const [phase, setPhase] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const [visibleLines, setVisibleLines] = useState([]);
  const [showStartup, setShowStartup] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [fading, setFading] = useState(false);
  const [count, setCount] = useState(0);

  const lineCountRef = useRef(0); // total lines added so far
  const phaseRef = useRef(0);
  const retryTimersRef = useRef([]);

  // helper: advance phase and update ref
  const goToPhase = (p) => {
    phaseRef.current = p;
    setPhase(p);
  };

  useEffect(() => {
    let timers = [];

    const schedule = (fn, delay) => {
      const id = setTimeout(fn, delay);
      timers.push(id);
      return id;
    };

    const runCycle = () => {
      // Reset state
      setTypedCmd("");
      setVisibleLines([]);
      setShowStartup(false);
      setShowSummary(false);
      setFading(false);
      setCount(0);
      lineCountRef.current = 0;
      retryTimersRef.current.forEach(clearTimeout);
      retryTimersRef.current = [];
      goToPhase(1);

      // Phase 1 — typewriter (0→700ms)
      const charDelay = 700 / CMD.length;
      CMD.split("").forEach((_, i) => {
        schedule(() => {
          setTypedCmd(CMD.slice(0, i + 1));
        }, i * charDelay);
      });

      // Phase 2 — startup line (700ms)
      schedule(() => {
        setShowStartup(true);
        goToPhase(2);
      }, 700);

      // Phase 3 — test lines (1400ms, every LINE_INTERVAL ms)
      schedule(() => {
        goToPhase(3);
      }, 1400);

      // Phase 4 — summary (8000ms)
      schedule(() => {
        goToPhase(4);
        setShowSummary(true);
      }, 8000);

      // Phase 5 — hold (9500ms)
      schedule(() => goToPhase(5), 9500);

      // Phase 6 — fade out (11500ms)
      schedule(() => {
        goToPhase(6);
        setFading(true);
      }, 11500);

      // Loop (12000ms)
      schedule(runCycle, 12000);
    };

    runCycle();

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Phase 3 interval: add test lines (including fail → retry → pass scenario)
  useEffect(() => {
    if (phase !== 3) return;

    const id = setInterval(() => {
      if (phaseRef.current !== 3) {
        clearInterval(id);
        return;
      }
      const idx = lineCountRef.current % TEST_LINES.length;
      const isFail = idx === 6; // 7th entry in each cycle triggers fail-retry
      lineCountRef.current += 1;
      const key = lineCountRef.current;
      const newLine = {
        ...TEST_LINES[idx],
        key,
        status: isFail ? "fail" : "pass",
      };
      setVisibleLines((prev) => {
        const next = [...prev, newLine];
        return next.length > MAX_VISIBLE
          ? next.slice(next.length - MAX_VISIBLE)
          : next;
      });

      if (isFail) {
        // fail → retry after 500ms
        const t1 = setTimeout(() => {
          if (phaseRef.current !== 3) return;
          setVisibleLines((prev) =>
            prev.map((l) => (l.key === key ? { ...l, status: "retry" } : l)),
          );
        }, 500);
        // retry → pass after 1300ms, then increment counter
        const t2 = setTimeout(() => {
          if (phaseRef.current !== 3) return;
          setVisibleLines((prev) =>
            prev.map((l) => (l.key === key ? { ...l, status: "pass" } : l)),
          );
          setCount((c) => Math.min(c + 1, 100));
        }, 1300);
        retryTimersRef.current.push(t1, t2);
      } else {
        setCount((c) => Math.min(c + 1, 100));
      }
    }, LINE_INTERVAL);

    return () => clearInterval(id);
  }, [phase]);

  const showCursor = phase <= 1;
  const showDots = phase >= 3 && !showSummary;

  return (
    <Wrapper
      role="img"
      aria-label="Animated Playwright test run showing 100 tests passed"
      aria-hidden="true"
      $fading={fading}
    >
      <Window>
        <TitleBar>
          <TrafficLight $color="#ff5f57" />
          <TrafficLight $color="#ffbd2e" />
          <TrafficLight $color="#28c840" />
          <TitleText>playwright test</TitleText>
          {phase >= 3 && (
            <CounterBadge>[{phase >= 4 ? 100 : count}/100]</CounterBadge>
          )}
        </TitleBar>
        <Body>
          <Prompt>
            {buildPromptText(typedCmd)}
            {showCursor && <Cursor />}
          </Prompt>

          {showStartup && (
            <StartupLine>Running 100 tests using 4 workers</StartupLine>
          )}

          <LinesWindow>
            {visibleLines.map((t) => {
              if (t.status === "fail") {
                return (
                  <TestLine key={t.key}>
                    <FailMark>✗</FailMark>
                    <BrowserTag>[{t.browser}]</BrowserTag>{" "}
                    <FilePath>
                      › {t.file}:{t.line}
                    </FilePath>
                    <TestTitle>{t.title}</TestTitle>
                  </TestLine>
                );
              }
              if (t.status === "retry") {
                return (
                  <TestLine key={t.key}>
                    <RetryMark>↻</RetryMark>
                    <BrowserTag>[{t.browser}]</BrowserTag>{" "}
                    <FilePath>
                      › {t.file}:{t.line}
                    </FilePath>
                    <TestTitle>retrying… ({t.ms})</TestTitle>
                  </TestLine>
                );
              }
              return (
                <TestLine key={t.key}>
                  <Check>✓</Check>
                  <BrowserTag>[{t.browser}]</BrowserTag>{" "}
                  <FilePath>
                    › {t.file}:{t.line}
                  </FilePath>
                  <TestTitle>
                    {t.title} ({t.ms})
                  </TestTitle>
                </TestLine>
              );
            })}
          </LinesWindow>

          {showDots && <Dots>· · ·</Dots>}

          {showSummary && <Summary>100 passed (28.4s)</Summary>}
        </Body>
      </Window>
    </Wrapper>
  );
};
// #endregion

export default PlaywrightConsole;
