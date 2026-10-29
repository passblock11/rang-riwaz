"use client";

import type { SnapTrackEvent } from "@/lib/snaptr";
import { trackSnap } from "@/lib/snaptr";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "onClick"> & {
  snapEvent: SnapTrackEvent;
  snapPayload?: Record<string, unknown>;
  onClick?: ComponentProps<"a">["onClick"];
};

/** External link that fires a Snap Pixel event before navigation. */
export function SnapTrackLink({
  snapEvent,
  snapPayload,
  href,
  children,
  onClick,
  ...rest
}: Props) {
  return (
    <a
      href={href}
      {...rest}
      onClick={(event) => {
        trackSnap(snapEvent, snapPayload);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
