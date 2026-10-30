import type { ComponentProps, ReactNode } from "react";
import { SnapTrackLink } from "@/components/SnapTrackLink";

const INSTAGRAM_URL = "https://www.instagram.com/rang.riwaz.in";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: ComponentProps<"a">["onClick"];
  /** Extra Snap fields (e.g. cart totals) merged into START_CHECKOUT. */
  snapPayload?: Record<string, unknown>;
};

export function InstagramLeadLink({ className, children, onClick, snapPayload }: Props) {
  return (
    <SnapTrackLink
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      snapEvent="START_CHECKOUT"
      snapPayload={{
        item_category: "instagram_dm",
        description: "Message on Instagram",
        ...snapPayload,
      }}
      onClick={onClick}
    >
      {children}
    </SnapTrackLink>
  );
}
