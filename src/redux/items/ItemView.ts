export type ItemView = {
    // TODO :: add all fields

    // TODO :: handle deleted and dead items
    // TODO :: handle undefined values

    id: number,
    title: string,
    score: number,
    by: string,
    time: number,

    text: string,
    parent: number,

    url: string,
    descendants: number,
    kids: string[]
}
