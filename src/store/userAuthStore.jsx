import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'
import toast from 'react-hot-toast'

export const userAuthStore = create((set) => ({
    authUser: null, //check whether user authenticated or not
    isCheckingAuth: true, //state to check the authentication (initially set the value to true bcz asoonas we refresh the pg we will check whether the user is authenticated, with this the authUser value change)
    isSigningUp: false,
    isLogingIn: false,
    isUpdatingProfile: false,
    onlineUsers: [],

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/user/check")
            set({ authUser: res.data })
        } catch (error) {
            set({ authUser: null })
            console.log("Error in checkAuth: ", error.response.data.status, error.name, error.code, error.response.data.message)
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post("/user/signup", data)
            set({ authUser: res.data })
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isSigningUp: false })
        }
    },

    login: async (data) => {
        set({ isLogingIn: true })
        try {
            const res = await axiosInstance.post("/user/login", data)
            set({ authUser: res.data })
            toast.success("You have logged in successully")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLogingIn: false })
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.put("/user/update_profile", data)
            console.log("data:", res.data)
            set({authUser: res.data})
            toast.success("Profile updated successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isUpdatingProfile: false})
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/user/logout")
            set({ authUser: null })
            toast.success("Logged out successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}))