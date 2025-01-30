// import { IKpiOrkDataItemRequest } from "../models/request/kpi-ork/IKpiOrkDataItemRequest";
import { apiClient } from "../apiClient";

export const accountApi = {
    getAccount: () => apiClient.get("account/select-all"),
    // insertUpdate: (request: IKpiOrkDataItemRequest[]) => apiClient.post("kpi-ork/insert-update", request),
};
