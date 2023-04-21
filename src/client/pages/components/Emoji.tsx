type EmojiType = {
  label: string | null;
  symbol: string | null;
};

const Emoji = (props: EmojiType) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export { Emoji, EmojiType };
