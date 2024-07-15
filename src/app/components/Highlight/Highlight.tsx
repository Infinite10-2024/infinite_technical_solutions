interface HighlightProps {
  children: string;
  color?: "primary" | "secondary" | "white";
}

const Highlight = ({ children, color }: HighlightProps) => {
  const colors = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    fontColor: "var(--color-font)",
    white: "var(--color-font-contrast)",
  };

  const style = { color: color ? colors[color] : '' };

  return <b style={style}>{children}</b>;
};

export default Highlight;
