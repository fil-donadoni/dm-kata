export const state = () => ({
    continents: [],
    continent_id: 1,
    is_mobile: null,
    modal_data: {},
    open_modals: [],
    search: null,
    tours: [],
})

export const getters = {
    continent(state) {
        return state.continents.find(continent => (continent.id === state.continent_id))
    },

    activeTours(state, getters) {
        return state.tours.filter(tour => {
            return tour.primaryDestination.primaryContinent.code === getters.continent.slug
                    && tour.bestTour
                    && tour.isActive
                    && tour.isBookable
        })
    },

    trendingTours(state, getters) {
        let tours = getters.activeTours.sort((a, b) => {
            return a.bestTour.price - b.bestTour.price
        })

        return tours.slice(0, 8)
    },

    notTrendingTours(state, getters) {
        return getters.activeTours.filter(tour => ! getters.trendingTours.includes(tour))
    }
}

export const mutations = {
    hideModal(state, name) {
        console.log(name, state.open_modals.indexOf(name))
        state.open_modals.splice(state.open_modals.indexOf(name))
    },

    showModal(state, params) {
        state.open_modals.push(params.name)

        state.modal_data[params.name] = params.data
    },

    setContinents(state, continents) {
        state.continents = continents
    },

    setContinent(state, continent) {
        state.continent_id = continent
    },


    setIsMobile(state, value) {
        state.is_mobile = value
    },

    setSearch(state, search) {
        state.search = search
    },

    setTours(state, tours) {
        state.tours = tours
    },
}
