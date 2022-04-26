// Action Creator for Redux
export function setNewDate(newdate) {
    return {
        type: 'NEW_DATE',
        data: newdate
    }
}