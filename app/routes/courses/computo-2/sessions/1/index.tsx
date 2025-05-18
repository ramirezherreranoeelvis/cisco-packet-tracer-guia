import React from "react";
import type { Route } from "./+types";
import Link, { A } from "~/shared/atoms/link";

export function meta({}: Route.MetaArgs) {
      return [{ title: "Computo 2" }, { name: "description", content: "xd" }];
}

const index = () => {
      return (
            <>
                  <nav>
                        <ul>
                              <Li className="" href="" text="¿Qué es SSH y Telnet?" />
                        </ul>
                  </nav>
                  <main>
                        <section>
                              <h1>¿Qué es SSH y Telnet?</h1>

                              <br />
                              <p>si el prefijo de la ip es /24 la submask es 255.255.255.0</p>
                        </section>
                  </main>
            </>
      );
};

const Li = ({ className = "", text = "", href }: A) => (
      <li>
            <Link className={className} text={text} href={href}></Link>
      </li>
);

export default index;
