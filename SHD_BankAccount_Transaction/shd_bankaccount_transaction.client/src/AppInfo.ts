interface IAppInfo {
    baseApiURL: string;
    subSytemId: number;
}

const appInfo: IAppInfo = {
    baseApiURL: import.meta.env.VITE_API_BASE_URL || "", // Sử dụng biến môi trường với tiền tố VITE_
    subSytemId: 11,
};
export { appInfo }

