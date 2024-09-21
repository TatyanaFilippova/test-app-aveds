import { create } from "zustand";

interface User {
    id: string, 
    login: string
    name: string
}

interface UserStore {
    user?: User;
    login: (user: User) => void;
    logout: () => void;
}

const useUserStore = create<UserStore>(set => ({
    user: undefined,
    login: (user) => {
        localStorage.setItem('user_id', user.id)
        set({
            user
        })

    },
    logout: () => {
        localStorage.removeItem('user_id')
        set({
            user: undefined
        })
    }
}))

export default useUserStore
