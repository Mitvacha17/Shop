import { ReactNode, createElement } from "react";
import { containsLaoText } from "@/lib/lao-text";

interface LaoTextProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Component that automatically applies font-lao class if text contains Lao characters
 * Usage: <LaoText>ສະບາຍດີ</LaoText> or <LaoText as="h1">Hello</LaoText>
 */
export function LaoText({
  children,
  className = "",
  as = "span",
}: LaoTextProps) {
  // Extract text content to check for Lao characters
  const textContent = typeof children === "string" ? children : "";
  const hasLaoText = containsLaoText(textContent);

  const combinedClassName =
    `${hasLaoText ? "font-lao" : ""} ${className}`.trim();
  const langAttr = hasLaoText ? "lo" : undefined;

  return createElement(
    as,
    { className: combinedClassName, lang: langAttr },
    children,
  );
}
