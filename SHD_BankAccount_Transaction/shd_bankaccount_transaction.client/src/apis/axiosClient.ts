import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// Khởi tạo axios client với cấu hình mặc định
const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

// Thêm interceptor cho request
axiosClient.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        // Bạn có thể thêm hoặc sửa đổi các thuộc tính của config ở đây
        return config;
    },
    function (error: AxiosError) {
        // Xử lý lỗi nếu có
        return Promise.reject(error);
    }
);

// Thêm interceptor cho response
axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        // Trả về dữ liệu của response
        return response.data;
    },
    function (error: AxiosError) {
        // Xử lý lỗi nếu có
        return Promise.reject(error);
    }
);

export { axiosClient };