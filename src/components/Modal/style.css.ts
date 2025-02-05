import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
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

const slideInFromBottom = keyframes({
  "0%": {
    opacity: 0,
    marginBottom: -50,
  },
  "100%": {
    opacity: 1,
    marginBottom: 0,
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
