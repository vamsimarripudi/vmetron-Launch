import styled from "styled-components";

const neon = "#00ff88";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: #020403;
  overflow: hidden;
  position: relative;
  color: white;
  font-family: Inter, sans-serif;

  &::after{
    content:"";
    position:absolute;
    inset:0;
    background:
      linear-gradient(
        rgba(255,255,255,0.015) 50%,
        transparent 50%
      );
    background-size:100% 4px;
    pointer-events:none;
    opacity:0.2;
    mix-blend-mode:overlay;
  }
`;

export const MouseGlow = styled.div`
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(0,255,136,0.08),
      transparent 70%
    );
  pointer-events: none;
  z-index: 1;
`;

export const HudPanel = styled.div`
  position:absolute;
  top:30px;
  right:30px;
  display:flex;
  flex-direction:column;
  gap:10px;
  z-index:20;

  span{
    color:${neon};
    font-size:10px;
    letter-spacing:0.14em;
    opacity:0.8;
  }
`;

export const BootOverlay = styled.div`
  position:fixed;
  inset:0;
  background:#020403;
  z-index:999;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;
`;

export const BootText = styled.div`
  color:${neon};
  font-size:14px;
  letter-spacing:0.2em;
`;

export const FloatingOrb = styled.div`
  position:absolute;
  width:220px;
  height:220px;
  border-radius:50%;
  background:rgba(0,255,136,0.06);
  filter:blur(80px);
  animation:float 8s ease-in-out infinite;

  @keyframes float{
    0%{
      transform:translateY(0px);
    }
    50%{
      transform:translateY(-30px);
    }
    100%{
      transform:translateY(0px);
    }
  }
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  width: 800px;
  height: 350px;
  background: rgba(0,255,136,0.08);
  filter: blur(140px);
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 22px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: 1px solid transparent;

  background:
    linear-gradient(#020403,#020403)
    padding-box,

    linear-gradient(
      135deg,
      rgba(0,255,136,0.3),
      rgba(0,229,255,0.2)
    ) border-box;

  display:flex;
  align-items:center;
  justify-content:center;
  color:${neon};

  backdrop-filter:blur(18px);
`;

export const LogoText = styled.h1`
  font-size:20px;
  font-weight:900;
  letter-spacing:0.14em;
`;

export const TopRight = styled.div`
  display:flex;
  gap:10px;
`;

export const TopBox = styled.div`
  display:flex;
  align-items:center;
  gap:7px;
  padding:10px 16px;
  border-radius:999px;
  border:1px solid transparent;

  background:
    linear-gradient(#020403,#020403)
    padding-box,

    linear-gradient(
      135deg,
      rgba(0,255,136,0.3),
      rgba(0,229,255,0.2)
    ) border-box;

  color:${neon};

  font-size:10px;
  letter-spacing:0.12em;

  backdrop-filter:blur(18px);
`;

export const HeroSection = styled.div`
  margin-top:80px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const HeroMiniText = styled.div`
  color:#86efac;
  font-size:10px;
  letter-spacing:0.3em;
`;

export const HeroTitle = styled.h1`
  margin-top:18px;
  text-align:center;
  font-size:60px;
  line-height:1;
  font-weight:900;
`;

export const HeroGreen = styled.span`
  display:block;
  margin-top:10px;
  color:${neon};

  text-shadow:
    0 0 14px rgba(0,255,136,0.35),
    0 0 40px rgba(0,255,136,0.12);
`;

export const HeroDescription = styled.p`
  margin-top:22px;
  max-width:650px;
  text-align:center;
  color:#cbd5e1;
  font-size:14px;
  line-height:1.9;
`;

export const LaunchButton = styled.button`
  margin-top:34px;
  border:1px solid transparent;

  background:
    linear-gradient(#020403,#020403)
    padding-box,

    linear-gradient(
      135deg,
      rgba(0,255,136,0.3),
      rgba(0,229,255,0.2)
    ) border-box;

  color:${neon};

  border-radius:18px;
  padding:18px 34px;

  display:flex;
  align-items:center;
  gap:10px;

  font-size:14px;
  font-weight:900;

  cursor:pointer;

  backdrop-filter:blur(18px);

  box-shadow:
    0 0 30px rgba(0,255,136,0.08);
`;

export const DashboardGrid = styled.div`
  margin-top:60px;
  display:grid;
  grid-template-columns:240px 1fr 240px;
  gap:20px;
`;

export const SidePanel = styled.div`
  border:1px solid transparent;

  background:
    linear-gradient(
      rgba(5,5,5,0.75),
      rgba(5,5,5,0.75)
    ) padding-box,

    linear-gradient(
      135deg,
      rgba(0,255,136,0.2),
      rgba(0,229,255,0.1)
    ) border-box;

  border-radius:24px;
  padding:18px;

  backdrop-filter:blur(18px);
`;

export const PanelTitle = styled.h1`
  color:${neon};
  font-size:11px;
  letter-spacing:0.18em;
  margin-bottom:18px;
`;

export const MetricCard = styled.div`
  border:1px solid rgba(0,255,136,0.08);
  background:rgba(0,255,136,0.03);

  border-radius:16px;
  padding:16px;
  margin-bottom:14px;

  backdrop-filter:blur(18px);
`;

export const MetricLabel = styled.p`
  color:#86efac;
  font-size:9px;
  letter-spacing:0.15em;
`;

export const MetricValue = styled.h1`
  margin-top:10px;
  font-size:24px;
  font-weight:900;
`;

export const MainCenter = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`;

export const FeatureGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
`;

export const FeatureCard = styled.div`
  border:1px solid rgba(0,255,136,0.08);
  background:rgba(0,255,136,0.03);

  border-radius:16px;
  padding:16px;

  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;

  color:#d1fae5;

  font-size:11px;

  backdrop-filter:blur(18px);
`;

export const TerminalSection = styled.div`
  border:1px solid rgba(0,255,136,0.1);
  background:rgba(0,0,0,0.5);

  border-radius:24px;
  overflow:hidden;

  backdrop-filter:blur(18px);
`;

export const TerminalHeader = styled.div`
  padding:16px;
  border-bottom:1px solid rgba(0,255,136,0.08);

  display:flex;
  justify-content:space-between;

  div{
    display:flex;
    align-items:center;
    gap:8px;
    color:${neon};
    font-size:10px;
    letter-spacing:0.14em;
  }
`;

export const TerminalBody = styled.div`
  padding:18px;
  display:flex;
  flex-direction:column;
  gap:14px;
`;

export const TerminalLine = styled.div`
  display:flex;
  gap:14px;

  color:#d1fae5;

  font-size:12px;
  line-height:1.8;

  animation:blink 1s infinite;

  @keyframes blink{
    50%{
      opacity:0.85;
    }
  }
`;

export const TimeStamp = styled.span`
  color:#64748b;
`;

export const ProgressWrapper = styled.div`
  margin-top:20px;

  span{
    color:${neon};
    font-size:11px;
  }
`;

export const ProgressBar = styled.div`
  margin-top:10px;
  height:10px;
  border-radius:999px;
  overflow:hidden;
  background:rgba(0,255,136,0.06);
`;

export const ProgressFill = styled.div`
  height:100%;
  background:${neon};

  box-shadow:
    0 0 20px ${neon};
`;

export const LiveCard = styled.div`
  margin-top:18px;

  border:1px solid rgba(0,255,136,0.14);
  background:rgba(0,255,136,0.06);

  border-radius:18px;
  padding:20px;

  h1{
    font-size:24px;
    font-weight:900;
  }

  p{
    margin-top:10px;
    color:#d1d5db;
    font-size:12px;
  }
`;

export const Footer = styled.div`
  margin-top:34px;
  text-align:center;
  color:#64748b;
  font-size:10px;
  letter-spacing:0.14em;
  padding-bottom:18px;
`;