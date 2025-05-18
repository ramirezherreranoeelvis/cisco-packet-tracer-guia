import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
      route("/", "routes/home.tsx", [
            route(
                  "/computo-1",
                  "routes/courses/computo-1/sessions/1/index.tsx"
            ),
            route(
                  "/computo-2",
                  "routes/courses/computo-2/sessions/1/index.tsx"
            ),
      ]),
] satisfies RouteConfig;
