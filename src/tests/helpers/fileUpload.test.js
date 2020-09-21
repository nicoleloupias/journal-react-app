import { fileUpload } from './../../helpers/fileUpload';
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: 'dilzo9sv8',
    api_key: '945769526318876',
    api_secret: 'QZYTvOJGxdce-5eUcf3SL2bc3KI'
  });

describe('pruebas en fileUpload', () => {

    test('debe de cargar un archivo y retornar el URL', async() => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')
        const blob = await resp.blob()
        const file = new File([blob], 'foto.png')
        const url = await fileUpload(file)

        expect( typeof url).toBe('string')

        const segments = url.split('/')
        const imageId = segments[ segments.length - 1].replace('.png','')
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done()
        });

    })

    test('debe de retornar un error', async() => {
        const file = new File([], 'foto.png')
        const url = await fileUpload(file)

        expect( url).toBe(null)

    })
})
