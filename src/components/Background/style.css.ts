import { style } from "@vanilla-extract/css";

export const base = style({
  minWidth: "100vw",
  minHeight: "100vh",

  background: "linear-gradient(180deg, #9DB1C5 0%, #DEDCD7 100%)",

  padding: "50px",

  display: "flex",
  flexDirection: "column",
  gap: 60,
});
