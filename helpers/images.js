import axios from 'axios'

function getTourThumbnail(tour) {
    const thumbnail_url = '/api/assets' + tour.thumbnailImage.mobile.thumbnailUrl

    return new Promise((resolve, reject) => {
        if(typeof tour.thumbnailImage.mobile.thumbnailUrl === 'undefined') {
            resolve(null)
        }

        axios.head(thumbnail_url)
            .then(() => {
                resolve(thumbnail_url)
            })
            .catch(error => {
                resolve(null)
            })
    })
}

export {
    getTourThumbnail,
}
