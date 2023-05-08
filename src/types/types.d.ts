export enum PodcastType {
    Music = 'Music',
    MusicCommentary = 'Music Commentary',
    MusicHistory = 'Music History',
    MusicInterviews = 'Music Interviews',
}

export interface CategoryAttributes {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface IDAttributes {
    'im:id': string;
}

export interface ID {
    label: string;
    attributes: IDAttributes;
}

export interface IMImageAttributes {
    height: string;
}

export interface IMArtistAttributes {
    href: string;
}

export interface IMArtist {
    label: string;
    attributes?: IMArtistAttributes;
}

export interface IMContentTypeAttributes {
    term: string;
    label: string;
}

export interface IMContentType {
    attributes: IMContentTypeAttributes;
}

export interface IMImage {
    label: string;
    attributes: IMImageAttributes;
}

export interface IMName {
    label: string;
}

export interface IMPriceAttributes {
    amount: string;
    currency: string;
}

export interface IMPrice {
    label: string;
    attributes: IMPriceAttributes;
}

export interface IMReleaseDate {
    label: string;
    attributes: IMName;
}

export interface LinkAttributes {
    rel: string;
    type: string;
    href: string;
}
export interface Link {
    attributes: LinkAttributes;
}

export interface RawPodcast {
    'im:name': IMName;
    'im:image': IMImage[];
    summary: IMName;
    'im:price': IMPrice;
    'im:contentType': IMContentType;
    rights?: IMName;
    title: IMName;
    link: Link;
    id: ID;
    'im:artist': IMArtist;
    category: Category;
    'im:releaseDate': IMReleaseDate;
}

export interface Podcast {
    id: string;
    name: string;
    image: string;
    summary: string;
    price: IMPrice;
    contentType: IMContentType;
    rights?: string;
    title: string;
    link: Link;
    artist: string;
    category: Category;
    releaseDate: IMReleaseDate;
}

interface SVGProps {
    classNameName?: string;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    width?: number;
    height?: number;
    color?: string;
}
export interface Genre {
    name: string;
    id: string;
}
export interface Episode {
    previewUrl: string;
    artworkUrl60: string;
    artistViewUrl: string;
    contentAdvisoryRating: string;
    trackViewUrl: string;
    description: string;
    collectionId: number;
    collectionName: string;
    trackId: number;
    trackName: string;
    feedUrl: string;
    artistIds: number[];
    shortDescription: string;
    releaseDate: string;
    closedCaptioning: string;
    country: string;
    episodeUrl: string;
    artworkUrl160: string;
    artworkUrl600: string;
    episodeFileExtension: string;
    episodeContentType: string;
    trackTimeMillis: number;
    collectionViewUrl: string;
    genres: Genre[];
    episodeGuid: string;
    kind: string;
    wrapperType: string;
}

export interface PodcastDetail extends Podcast {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    feedUrl: string;
    trackViewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    collectionHdPrice: number;
    releaseDate: Date;
    collectionExplicitness: string;
    trackExplicitness: string;
    trackCount: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    contentAdvisoryRating: string;
    artworkUrl600: string;
    genreIds: string[];
    genres: string[];
    episodes: Episode[];
}

export interface PodcastDetailsProps {
    podcast: PodcastDetail;
    showDescription?: boolean;
  }
