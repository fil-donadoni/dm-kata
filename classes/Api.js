import axios from 'axios'

export class Api {

    /**
     * Create a new Api instance.
     *
     * @param {object} store
     */
     constructor(store) {
        this.$store = store
    }

    get(uri, query, commit_method) {
        // isLoading()

        return new Promise((resolve, reject) => {
            axios.get(uri, { params: query })
                .then(response => {
                    // stopLoading()

                    if(commit_method) {
                        this.$store.commit(commit_method, response.data)
                    }

                    resolve(response.data ? response.data : response)
                })
                .catch(response => {
                    // stopLoading()

                    reject(response)
                })
        })
    }
}
