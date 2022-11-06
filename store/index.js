export const state = () => ({
    continents: [],
    continent_id: 1,
    is_mobile: null,
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
