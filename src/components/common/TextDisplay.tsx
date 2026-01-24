import React from "react";
import ScrollAnimation from "../ScrollAnimation";
import type {
  TextDisplayConfig,
  TextRow,
  TextLine,
  TextSegment,
} from "@/types/text-display";

interface TextDisplayProps {
  config: TextDisplayConfig;
}

const TextSegmentComponent: React.FC<{ segment: TextSegment }> = ({
  segment,
}) => {
  return <span className={segment.className}>{segment.text}</span>;
};

const TextLineComponent: React.FC<{ line: TextLine }> = ({ line }) => {
  return (
    <div className={line.className}>
      {line.segments.map((segment, segmentIndex) => (
        <TextSegmentComponent key={segmentIndex} segment={segment} />
      ))}
    </div>
  );
};

const TextRowComponent: React.FC<{ row: TextRow }> = ({ row }) => {
  return (
    <div className={row.containerClassName}>
      <div className={row.className}>
        {row.lines.map((line, lineIndex) => (
          <TextLineComponent key={lineIndex} line={line} />
        ))}
      </div>
    </div>
  );
};

export default function TextDisplay({ config }: TextDisplayProps) {
  const content = (
    <div className={config.containerClassName}>
      {config.rows.map((row, rowIndex) => (
        <TextRowComponent key={rowIndex} row={row} />
      ))}
    </div>
  );

  // Wrap with ScrollAnimation if animation is enabled
  if (config.animate) {
    return (
      <ScrollAnimation
        direction={config.animationDirection || "up"}
        distance={24}
        delay={config.animationDelay || 0.2}
      >
        {content}
      </ScrollAnimation>
    );
  }

  return content;
}
