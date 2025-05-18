import { Outlet } from "react-router";
import type { Route } from "./+types/home";
import Link from "~/shared/atoms/link";

export function meta({}: Route.MetaArgs) {
      return [
            { title: "New React Router App" },
            { name: "description", content: "Welcome to React Router!" },
      ];
}

export default function Home() {
      return (
            <>
                  <header></header>
                  <nav>
                        <ul>
                              <Li
                                    className=""
                                    href="computo-1"
                                    text="computo-1 s1"
                              />
                              <Li
                                    className=""
                                    href="computo-2"
                                    text="computo-2 s1"
                              />
                        </ul>
                  </nav>
                  <Outlet />
                  <footer></footer>
            </>
      );
}
const Li = ({ className = "", text = "", href }: A) => (
      <li>
            <Link className={className} text={text} href={href}></Link>
      </li>
);
