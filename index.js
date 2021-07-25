export const Root = {
  resource: async ({ args }) => {
    const { body, headers } = await M.nodes.sys_http.resource({ ...args }).$query(`{ body headers }`);
    return { body, headers };
  },
}
M.nodes;