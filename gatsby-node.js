exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const lanzamientoTemplate = require('path').resolve('./src/Template/Lanzamiento.js')

    const lanzamientos = await graphql(`
        query {
            spacex {
                launchesPast {
                    id
                    mission_name
                    details
                    launch_date_local
                    launch_success
                    launch_site {
                    site_name
                    }
                    links {
                    flickr_images
                    video_link
                    }
                }
            }
        }
      `)

    lanzamientos.data.spacex.launchesPast.forEach(lanzamiento => {
        createPage({
            path: `/lanzamiento/${lanzamiento.id}`,
            component: lanzamientoTemplate,
            context: {
                ...lanzamiento
            }
        })
    })
}