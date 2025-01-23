export type messages = {
    type: "server" | "client" | "room",
    message: string,
    name: string // Rastrear usos e tornar dinamico
}