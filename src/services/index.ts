import { Podcast, RawPodcast } from '@_types/types'
import { URL } from '@utils/constants'

export function apiParser (content: RawPodcast[]): Podcast[] {
  return content.map((podcast: RawPodcast) => {
    const {
      id,
      'im:name': name,
      'im:image': image,
      summary,
      'im:price': price,
      'im:contentType': contentType,
      rights,
      title,
      'im:artist': artist,
      category,
      'im:releaseDate': releaseDate
    } = podcast

    const link = {
      attributes: {
        ...podcast.link.attributes,
        href: `${URL}podcast/${id.attributes['im:id']}`
      }
    }

    return {
      id: id.attributes['im:id'],
      name: name.label,
      image: image[2].label,
      summary: summary.label,
      price,
      contentType,
      rights: rights ? rights.label : '',
      title: title.label,
      link,
      artist: artist.label,
      category,
      releaseDate
    }
  })
}
