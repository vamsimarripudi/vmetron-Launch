import {
  Activity,
  Cpu,
  Database,
  Globe,
  Rocket,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

import {
  AppContainer,
  BackgroundGlow,
  GridOverlay,
  Wrapper,
  TopBar,
  LogoSection,
  LogoIcon,
  LogoText,
  TopRight,
  TopBox,
  HeroSection,
  HeroMiniText,
  HeroTitle,
  HeroGreen,
  HeroDescription,
  LaunchButton,
  DashboardGrid,
  SidePanel,
  PanelTitle,
  MetricCard,
  MetricLabel,
  MetricValue,
  MainCenter,
  FeatureGrid,
  FeatureCard,
  TerminalSection,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  TimeStamp,
  ProgressWrapper,
  ProgressBar,
  ProgressFill,
  LiveCard,
  Footer,
  FloatingOrb,
  MouseGlow,
  HudPanel,
  BootOverlay,
  BootText,
} from "./styledComponents";

import { useEffect, useState } from "react";

import confetti from "canvas-confetti";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import { TypeAnimation } from "react-type-animation";

import Particles from "react-tsparticles";

export default function App() {
  const [launching, setLaunching] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [live, setLive] = useState(false);

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  const launchCelebration = () => {
    const duration = 10000;

    const animationEnd =
      Date.now() + duration;

    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 80,
      zIndex: 9999,
    };

    const randomInRange = (
      min,
      max
    ) =>
      Math.random() * (max - min) +
      min;

    const interval = setInterval(() => {
      const timeLeft =
        animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        ...defaults,
        particleCount: 4,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
        colors: [
          "#00ff88",
          "#00e5ff",
          "#ffffff",
          "#00ffcc",
        ],
      });

      confetti({
        ...defaults,
        particleCount: 4,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
        colors: [
          "#00ff88",
          "#00e5ff",
          "#ffffff",
          "#00ffcc",
        ],
      });
    }, 180);
  };

  useEffect(() => {
    const move = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  useEffect(() => {
    let interval;

    if (launching && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 2;

          if (next >= 100) {
            clearInterval(interval);

            setTimeout(() => {
              setLive(true);
            }, 1000);

            setTimeout(() => {
              window.location.href =
                "https://www.vmetron.in";
            }, 10000);

            return 100;
          }

          return next;
        });
      }, 80);
    }

    return () => clearInterval(interval);
  }, [launching, progress]);

  return (
    <AppContainer>
      <Particles
        options={{
          background: {
            color: {
              value: "#020403",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#00ff88",
            },
            links: {
              color: "#00ff88",
              distance: 120,
              enable: true,
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
            },
            number: {
              value: 45,
            },
            opacity: {
              value: 0.18,
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },
        }}
      />

      <MouseGlow
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />

      <BackgroundGlow />
      <GridOverlay />

      <FloatingOrb
        style={{
          top: "10%",
          left: "-5%",
        }}
      />

      <FloatingOrb
        style={{
          bottom: "10%",
          right: "-5%",
        }}
      />

      {launching && (
        <BootOverlay>
          <BootText>
            INITIALIZING VMETRON CORE...
          </BootText>

          <BootText>
            CONNECTING GLOBAL NODES...
          </BootText>

          <BootText>
            AUTHENTICATING
            INFRASTRUCTURE...
          </BootText>

          <BootText>
            SYNCHRONIZING REALTIME
            CLUSTER...
          </BootText>

          <ProgressWrapper>
            <span>
              DEPLOYMENT : {progress}%
            </span>

            <ProgressBar>
              <ProgressFill
                style={{
                  width: `${progress}%`,
                }}
              />
            </ProgressBar>
          </ProgressWrapper>
        </BootOverlay>
      )}

      <Wrapper>
        <HudPanel>
          <span>
            LIVE USERS : 18,429
          </span>

          <span>
            EVENTS : 248
          </span>

          <span>
            REQUESTS/sec : 42K
          </span>
        </HudPanel>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <TopBar>
            <LogoSection>
              <LogoIcon>
                <Zap size={18} />
              </LogoIcon>

              <LogoText>
                VMETRON
              </LogoText>
            </LogoSection>

            <TopRight>
              <TopBox>
                <Activity size={13} />
                LIVE
              </TopBox>

              <TopBox>
                <Shield size={13} />
                SECURE
              </TopBox>
            </TopRight>
          </TopBar>
        </motion.div>

        <HeroSection>
          <HeroMiniText>
            NEXT GENERATION EVENT
            ECOSYSTEM
          </HeroMiniText>

          <HeroTitle>
            <TypeAnimation
              sequence={[
                "THE FUTURE OF",
                1500,
                "NEXT GEN EVENT OPS",
                1500,
                "REALTIME EVENT ECOSYSTEM",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />

            <HeroGreen>
              EVENT OPS
            </HeroGreen>
          </HeroTitle>

          <HeroDescription>
            AI-powered realtime
            infrastructure for
            organizers, developers,
            communities, analytics,
            collaboration, and immersive
            event operations.
          </HeroDescription>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
          >
            <LaunchButton
              onClick={() => {
                setLaunching(true);

                launchCelebration();

                const audio =
                  new Audio(
                    "/launch.mp3"
                  );

                audio.play();
              }}
            >
              {launching
                ? "INITIALIZING..."
                : "LAUNCH VMETRON"}

              <Rocket size={18} />
            </LaunchButton>
          </motion.div>
        </HeroSection>

        <DashboardGrid>
          <SidePanel>
            <PanelTitle>
              SYSTEM METRICS
            </PanelTitle>

            <MetricCard>
              <MetricLabel>
                UPTIME
              </MetricLabel>

              <MetricValue>
                <CountUp
                  end={99.99}
                  duration={4}
                  decimals={2}
                />
                %
              </MetricValue>
            </MetricCard>

            <MetricCard>
              <MetricLabel>
                LATENCY
              </MetricLabel>

              <MetricValue>
                <CountUp
                  end={12}
                  duration={4}
                />
                ms
              </MetricValue>
            </MetricCard>

            <MetricCard>
              <MetricLabel>
                EVENTS
              </MetricLabel>

              <MetricValue>
                <CountUp
                  end={8400}
                  duration={4}
                />
              </MetricValue>
            </MetricCard>
          </SidePanel>

          <MainCenter>
            <FeatureGrid>
              {[
                {
                  icon: <Globe size={13} />,
                  text: "Realtime Rooms",
                },
                {
                  icon: <Cpu size={13} />,
                  text: "Observability",
                },
                {
                  icon: <Database size={13} />,
                  text: "AI Profiles",
                },
                {
                  icon: <Shield size={13} />,
                  text: "Enterprise Security",
                },
              ].map((item) => (
                <FeatureCard key={item.text}>
                  {item.icon}
                  {item.text}
                </FeatureCard>
              ))}
            </FeatureGrid>

            <TerminalSection>
              <TerminalHeader>
                <div>
                  <Terminal size={14} />
                  VMETRON TERMINAL
                </div>

                <div>
                  <Activity size={13} />
                  LIVE FEED
                </div>
              </TerminalHeader>

              <TerminalBody>
                {[
                  "[BOOT] Initializing core systems... █",
                  "[AUTH] Pulse engine ready █",
                  "[ROOMS] Realtime cluster active █",
                  "[OBSERVE] Metrics pipeline connected █",
                  "[CDN] Global deployment synced █",
                  "[LIVE] Ecosystem operational █",
                ].map((item) => (
                  <TerminalLine key={item}>
                    <TimeStamp>
                      [00:00:00]
                    </TimeStamp>

                    {item}
                  </TerminalLine>
                ))}

                {live && (
                  <LiveCard>
                    <h1>
                      VMETRON IS NOW LIVE
                    </h1>

                    <p>
                      Redirecting to
                      www.vmetron.in
                    </p>
                  </LiveCard>
                )}
              </TerminalBody>
            </TerminalSection>
          </MainCenter>

          <SidePanel>
            <PanelTitle>
              LIVE NETWORK
            </PanelTitle>

            {[
              "AUTHENTICATION",
              "OBSERVABILITY",
              "SOCKET CLUSTER",
              "REALTIME ROOMS",
              "ANALYTICS",
              "GLOBAL CDN",
            ].map((item) => (
              <MetricCard key={item}>
                <MetricLabel>
                  ACTIVE SERVICE
                </MetricLabel>

                <MetricValue
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {item}
                </MetricValue>
              </MetricCard>
            ))}
          </SidePanel>
        </DashboardGrid>

        <Footer>
          © 2026 VMETRON —
          ALL SYSTEMS OPERATIONAL
        </Footer>
      </Wrapper>
    </AppContainer>
  );
}