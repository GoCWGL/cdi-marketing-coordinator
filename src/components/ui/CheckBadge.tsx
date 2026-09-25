import { CheckIcon } from "./Icons";

type Props = { alt?: boolean };

export default function CheckBadge({ alt }: Props) {
  return (
    <span className={alt ? "point-check point-check--alt" : "point-check"}>
      <CheckIcon size={13} />
    </span>
  );
}
