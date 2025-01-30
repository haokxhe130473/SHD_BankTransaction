import { ILoginRequest } from "../../models/request/auth/ILoginRequest";
import { apiClient } from "../apiClient";

export const authApi = {
  logIn: (request: ILoginRequest) => apiClient.post("auth/login",request),
};
