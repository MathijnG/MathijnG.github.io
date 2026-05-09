export default function Glass({ children, className = "", as = "div", style, ...rest }) {
  const Tag = as;

  return (
    <Tag className={`glass ${className}`} style={style} {...rest}>
      <div className="glass-sheen" aria-hidden="true" />
      <div className="glass-inner">{children}</div>
    </Tag>
  );
}
