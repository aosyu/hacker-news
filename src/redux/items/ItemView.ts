export interface ItemView {
    id: number,
    title: string,
    score: number,
    by: string,
    time: number,

    url: string,
    descendants: number,
    kids: string[]
}