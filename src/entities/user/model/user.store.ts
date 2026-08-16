import type { StateCreator } from "zustand";
import type { User } from ".";
import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";
import { getProfile } from "../api";

export type UserState = {
    profile?: User;
}

export type UserActions = {
    getProfile: () => void;
}

type createUserStoreType = StateCreator<UserState & UserActions>

const userSlice: createUserStoreType = (set) => ({
    profile: undefined,
    getProfile: async () => {
        const profile = await getProfile();
        set({profile})
    },
})

export const useUserStore = createWithEqualityFn<UserState & UserActions>()(
    devtools(userSlice, {
        name: "userStore"
    })
)