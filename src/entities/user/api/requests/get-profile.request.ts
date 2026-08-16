import { http } from "@/shared/api";
import { USER_API } from "../routes";
import type { User } from "../../model";

export async function getProfile() {
    // Обработка ошибки
    const {data} = await http.get<User>(USER_API.profile);
    return data;
}