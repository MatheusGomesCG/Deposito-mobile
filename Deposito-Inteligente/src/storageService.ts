import AsyncStorage from "@react-native-async-storage/async-storage"

const storage = {
    get: async (key: string) => {
        try {
            const item: any = await AsyncStorage.getItem(key)
        return JSON.parse(item)
        } catch (err) {
            return null
        }
    },
    set: async (key: string, password: string) => {
        await AsyncStorage.setItem(key, JSON.stringify(password))
    }
}

export default storage