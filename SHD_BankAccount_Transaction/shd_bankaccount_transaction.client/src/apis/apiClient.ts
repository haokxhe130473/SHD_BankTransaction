//mport { jwtDecode } from "jwt-decode";
import { appInfo } from '../AppInfo';
import { IBaseResponeModel } from '../models/response/IBaseResponeModel';
import { axiosClient } from './axiosClient';
export type jwt_decodeResult = {
    exp: any,
    unique_name: string,
}
// let refreshTokenRequest: Promise<any> | null;

// const checkIsTokenExpired = (): boolean => {
//     try {
//         const data: jwt_decodeResult = jwtDecode(localStorage.access_token)
//         if (localStorage.access_token && data) {
//             const exp = data.exp;
//             if (parseInt(exp) <= Math.floor(Date.now() / 1000)) {
//                 return true;
//             }
//         }
//         return false;
//     } catch (error) {
//         return false;
//     }
// }

// const refreshToken = () => {
//     return new Promise(resolve => {
//         setTimeout(async () => {
//             const data: jwt_decodeResult = jwtDecode(localStorage.access_token)
//             const res: IBaseResponeModel = await axiosClient.post(`${appInfo.baseApiURL}/auth/refresh`, {
//                 username: data.unique_name,
//                 refresh_token: localStorage.refresh_token
//             });

//             if (res.is_success) {
//                 resolve(res.data)
//             } else {
//                 resolve(null);
//             }

//         }, 1000);
//     });
// };
// const configIfTokenExpired = async () => {
//     const isTokenExpired = checkIsTokenExpired();
//     if (isTokenExpired) {
//         // refreshTokenRequest = refreshTokenRequest
//         //     ? refreshTokenRequest
//         //     : refreshToken();

//         // const newTokens = await refreshTokenRequest;
//         // refreshTokenRequest = null;
//         // if (!newTokens) {
//         //     await localStorage.removeItem("access_token");
//         //     await localStorage.removeItem("refresh_token");
//         //     window.location.href = '/authentication/login'; 
//         // }else{
//         //     const new_access_token = newTokens.access_token;
//         //     const new_refresh_token = newTokens.refresh_token;
//         //     localStorage.access_token = new_access_token;
//         //     localStorage.refresh_token = new_refresh_token;
//         // }
//         await localStorage.removeItem("access_token");
//         await localStorage.removeItem("refresh_token");
//         window.location.href = '/authentication/login';
//     }
// }
const apiClient = {
    get: async (path: string): Promise<IBaseResponeModel> => {
        const url = `${appInfo.baseApiURL}/${path}`
        try {
            // await configIfTokenExpired();
            // const config = {
            //     headers: { Authorization: `Bearer ${localStorage.access_token}` }
            // }
            const res = await axiosClient.get<any, IBaseResponeModel>(url);
            return res;
        } catch (error: any) {
            if (error.response.status == 401) {
                return {
                    status_code: parseInt(error.response.status),
                    is_success: false,
                    message: "Bạn không được phân quyền để thực hiện thao tác này. Vui lòng liên hệ Quản trị viên để được hỗ trợ."
                }
            } else {
                return {
                    status_code: error.response.data.status_code,
                    is_success: false,
                    message: error.response.data.message || "Có lỗi"
                };
            }

        }
    }
    ,
    post: async (path: string, data?: any): Promise<IBaseResponeModel> => {
        const url = `${appInfo.baseApiURL}/${path}`
        try {
            // await configIfTokenExpired();
            // const config = {
            //     headers: { Authorization: `Bearer ${localStorage.access_token}` }
            // }
            const res = await axiosClient.post<any, IBaseResponeModel>(url, data);
            return res;
        } catch (error: any) {
            if (error.response.status == 401) {
                return {
                    status_code: parseInt(error.response.status),
                    is_success: false,
                    message: "Bạn không được phân quyền để thực hiện thao tác này. Vui lòng liên hệ Quản trị viên để được hỗ trợ."
                }
            } else {
                return {
                    status_code: error.response.data.status_code,
                    is_success: false,
                    message: error.response.data.message || "Có lỗi"
                };
            }

        }
    },
    postForm: async (path: string, formData: FormData, isBlob?: boolean): Promise<IBaseResponeModel> => {
        const url = `${appInfo.baseApiURL}/${path}`;
        try {
            // await configIfTokenExpired();
            const config: any = {
                headers: {
                    // 'Authorization': `Bearer ${localStorage.access_token}`,
                    'Content-Type': 'multipart/form-data' // Đặt Content-Type cho FormData
                }
            };

            // Nếu isBlob là true, thêm responseType vào config
            if (isBlob) {
                config.responseType = 'blob';
            }

            const res = await axiosClient.post<any, IBaseResponeModel>(url, formData, config);
            return res;
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                return {
                    status_code: parseInt(error.response.status),
                    is_success: false,
                    message: "Bạn không được phân quyền để thực hiện thao tác này. Vui lòng liên hệ Quản trị viên để được hỗ trợ."
                };
            } else {
                return {
                    status_code: error.response ? error.response.data.status_code : 500,
                    is_success: false,
                    message: error.response ? error.response.data.message || "Có lỗi" : "Có lỗi không xác định"
                };
            }
        }
    },
    put: async (path: string, data?: any): Promise<IBaseResponeModel> => {
        const url = `${appInfo.baseApiURL}/${path}`
        try {
            // await configIfTokenExpired();
            // const config = {

            //     headers: { Authorization: `Bearer ${localStorage.access_token}` }
            // }
            const res = await axiosClient.put<any, IBaseResponeModel>(url, data);
            return res;
        } catch (error: any) {
            if (error.response.status == 401) {
                return {
                    status_code: parseInt(error.response.status),
                    is_success: false,
                    message: "Bạn không được phân quyền để thực hiện thao tác này. Vui lòng liên hệ Quản trị viên để được hỗ trợ."
                }
            } else {
                return {
                    status_code: error.response.data.status_code,
                    is_success: false,
                    message: error.response.data.message || "Có lỗi"
                };
            }

        }
    },
    delete: async (path: string): Promise<IBaseResponeModel> => {
        const url = `${appInfo.baseApiURL}/${path}`
        try {
            // await configIfTokenExpired();
            //     const config = {
            //         headers: { Authorization: `Bearer ${localStorage.access_token}`, 
            //     }            
            // }
            const res = await axiosClient.delete<any, IBaseResponeModel>(url);

            return res;
        } catch (error: any) {
            if (error.response.status == 401) {
                return {
                    status_code: parseInt(error.response.status),
                    is_success: false,
                    message: "Bạn không được phân quyền để thực hiện thao tác này. Vui lòng liên hệ Quản trị viên để được hỗ trợ."
                }
            } else {
                return {
                    status_code: error.response.data.status_code,
                    is_success: false,
                    message: error.response.data.message || "Có lỗi"
                };
            }

        }
    }
}
export { apiClient };
