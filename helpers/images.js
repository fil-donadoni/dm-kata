import axios from 'axios'

function getTourThumbnail(tour) {
    const thumbnail_url = '/api/assets' + tour.thumbnailImage.mobile.thumbnailUrl

    console.log('get thumbnail', thumbnail_url)

    return new Promise((resolve, reject) => {
        if(typeof tour.thumbnailImage.mobile.thumbnailUrl === 'undefined') {
            resolve(null)
        }

        axios.head(thumbnail_url)
            .then(() => {
                resolve(thumbnail_url)
            })
            .catch(error => {
                console.log(error)

                resolve(null)
            })
    })
}

export {
    getTourThumbnail,
}
