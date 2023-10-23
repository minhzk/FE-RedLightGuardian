import axiosApiInstance from '@/plugins/api'
export const getUsersApi = async () => {
    return await axiosApiInstance.get('/users')
}
export const updateUserApi = async (id, data) => {
    delete data.id
    delete data.isEmailVerified
    delete data.balance
    return await axiosApiInstance.patch(`/users/${id}`, data)
}
export const changeBalance = async (userID, balance) => {
    return await axiosApiInstance.patch(`/users/${userID}/change-balance`, { balance: balance })
}

export const deleteUser = async (id) => {
    return await axiosApiInstance.delete(`/users/${id}`)
}
export const getAllUsers = async () => {
    return await axiosApiInstance.get('/users')
}
export const updateUser = async (id, newUser) => {
    return await axiosApiInstance.put(`/users/${id}`, newUser)
}
export const getSingleUser = async (id) => {
    return await axiosApiInstance.get(`/users/${id}`)
}
export const addUser = async (newUser) => {
    return await axiosApiInstance.post(`/users`, newUser)
}
