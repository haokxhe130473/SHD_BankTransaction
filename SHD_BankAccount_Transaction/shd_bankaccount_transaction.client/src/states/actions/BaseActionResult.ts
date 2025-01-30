
class BaseActionResult<X, Y> {
    type: X;
    payload: Y;
    constructor(type: X, payload: Y) {
        this.type = type;
        this.payload = payload
    }
}

export function baseAction<X, Y>(type: X, input: Y) {
    return { ...new BaseActionResult(type, input) }
}
