import { rest } from "msw";
import { mockedUsers } from "../constants/constants";

const url = "https://jsonplaceholder.typicode.com/users";

const handlers = [
  rest.get(url, (req, res, ctx) => {
    sessionStorage;
    return res(ctx.status(200), ctx.json(mockedUsers));
  }),
];

export { handlers };
