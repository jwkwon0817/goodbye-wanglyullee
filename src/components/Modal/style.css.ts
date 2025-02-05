import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const backdrop = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
  animation: `${fadeIn} 0.4s`,
});

export const backdropExit = style({
  animation: `${fadeOut} 0.4s`,
  animationFillMode: "forwards",
});

const slideInFromBottom = keyframes({
  "0%": {
    transform: "translate(-50%, calc(-50% + 20px))",
  },
  "100%": {
    transform: "translate(-50%, -50%)",
  },
});

const slideOutToBottom = keyframes({
  "0%": {
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
  "100%": {
    transform: "translate(-50%, calc(-50% + 20px))",
    opacity: 0,
  },
});

export const modal = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  backgroundColor: "white",
  padding: 25,
  borderRadius: 25,
  animation: `${slideInFromBottom} 0.4s`,
});

export const modalExit = style({
  animation: `${slideOutToBottom} 0.4s`,
  animationFillMode: "forwards",
});
