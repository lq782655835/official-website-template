export const state = () => ({
    visibleForm: false
})

export const mutations = {
    setVisibleForm(state, visible) {
        state.visibleForm = visible
    }
}
