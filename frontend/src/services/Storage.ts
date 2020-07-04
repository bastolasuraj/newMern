class StorageService {
    static set(key: string, data: any): void {
        return sessionStorage.setItem(key, data)
    }

    static get(key: string): any {
        return sessionStorage.getItem(key)
    }

    static delete(key: string, data: any): void {
        return sessionStorage.removeItem(key)
    }

    static clear(): void {
        return sessionStorage.clear()
    }
}

export default StorageService