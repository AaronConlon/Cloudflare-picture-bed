import { AutoRouter } from "itty-router";

const router = AutoRouter();

router
  .get("/json", () => ({ foo: "bar", array: [1, 2, 3] }))
  .get("/params/:id", ({ id }) => id);

export default router;
