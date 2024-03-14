import { buildContext } from "@coveo/headless";
import { useContext } from "react";
import EngineContext from "../common/engineContext";

export function Context() {
  const engine  = useContext(EngineContext);
  const ctx = buildContext(engine!);

  ctx.set({
    ageGroup: "30-45",
    interests: ["sports", "camping", "electronics"],
  });

  return null;
}
