import { SVGProps } from "react";
import { cn } from "../../lib/utils";
import { BetterAuthIcon, BunJsIcon, CursorAiIcon, DrizzleIcon, V0Icon } from "./custom-icons";

export const Icons = {
  bunjs: BunJsIcon,
  drizzle: DrizzleIcon,
  cursorAi: CursorAiIcon,
  betterAuth: BetterAuthIcon,
  v0: V0Icon,
} as const;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
}

export function IconProvider({ name, className, ...props }: IconProps) {
  const Icon = Icons[name];
  return <Icon className={cn("w-[1em] h-[1em]", className)} {...props} />;
}
