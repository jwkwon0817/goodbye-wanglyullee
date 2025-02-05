import { style } from "@vanilla-extract/css";

export const top = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const form = style({
  padding: "17px 0",

  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 6,
});
