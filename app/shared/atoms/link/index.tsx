import { Link } from "react-router";
export class A {
      text?: string;
      className?: string;
      href?: string;
}
export default function ({ text, className = "", href = "" }: A) {
      return (
            <Link to={href} className={"cursor-pointer " +className}>
                  {text}
            </Link>
      );
}
