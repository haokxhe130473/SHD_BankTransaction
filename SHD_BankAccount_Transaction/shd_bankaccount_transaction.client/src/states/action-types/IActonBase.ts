export interface IActionBaseWithoutPayload<X> {
    type: X
}
export interface IActionBase<X, Y> extends IActionBaseWithoutPayload<X>{
    payload: Y
}