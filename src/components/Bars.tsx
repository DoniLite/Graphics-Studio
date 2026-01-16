export interface BarsProps {
  height: number;
  width: number;
  round: number;
  [key: string]: unknown;
}

export default function Bars({ height, width, round, ...rest }: BarsProps) {
  return <div style={{ height, width, borderRadius: round }} {...rest} />;
}
