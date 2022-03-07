
export type MessageType = {
    type: "error" | "warning" | "success" | "info",
    message: string, 
    isHidden: boolean
}