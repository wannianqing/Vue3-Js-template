import { server } from "./request";
import http from "./request";
/** 角色模块 */
export const createRoleApi = (data) => {
  return server({
    url: "/role/create",
    method: "POST",
    data: data,
  });
};

export const roleListByPage = (data) => {
  return server({
    url: "/role/list",
    method: "GET",
    params: data,
  });
};
