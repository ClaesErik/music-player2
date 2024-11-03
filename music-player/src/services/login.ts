import { axiosInstance } from "../libs/axios";

type LoginProps = {
    login: string;
    password: string;
};

export const login = async ({ login, password }: LoginProps) => {
    try {
        const results = await axiosInstance.post("auth/login", {
            login,
            password,
        });
        return results.data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
