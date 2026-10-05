import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/cn";

export function Reveal({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", delay ? `delay-${delay}` : "", className)}>
      {children}
    </div>
  );
}
