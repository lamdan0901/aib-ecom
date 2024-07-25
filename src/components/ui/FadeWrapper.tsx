"use client";

import { ReactNode, useEffect, useRef, useState, memo } from "react";
import { cn } from "@/config/utils";

interface FadeWrapperProps {
  isVisible: boolean;
  maxHeight?: number;
  timeAnimation?: number;
  children: ReactNode;
  className?: string;
}

const FadeWrapper = ({
  isVisible,
  children,
  className,
  maxHeight,
  timeAnimation = 300,
}: FadeWrapperProps) => {
  const [heightRef, setHeightRef] = useState(0);
  const fadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && fadeRef.current) {
      const childrenHeight = fadeRef.current.scrollHeight;
      setHeightRef(childrenHeight);
    } else {
      setHeightRef(0);
    }
  }, [isVisible]);

  return (
    <div
      className={cn(
        className,
        "fade-animation overflow-hidden",
        isVisible && "fade-animation__active",
        isVisible && maxHeight && "overflow-auto"
      )}
      ref={fadeRef}
      style={{
        height: isVisible ? `${heightRef}px` : 0,
        maxHeight: maxHeight ? `${maxHeight}px` : "none",
        transition: `all ${timeAnimation}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default memo(FadeWrapper);
