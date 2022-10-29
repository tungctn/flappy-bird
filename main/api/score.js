import axios from "./axios"

export const saveScore = async (data) => {
    try {
        const response = await axios.post('/save', data)
        return response.data
    } catch (error) {
        return { success: false, message: error.message }
    }
}