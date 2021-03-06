import { SiteName, Titletabbrowser } from 'config/const';
import { NextSeo } from 'next-seo';
import { webHost } from 'src/services/apiAddress';

interface ImageSeo {
    url: string,
    width: number,
    height: number,
    alt?: string,
    type?: string,
}

interface IProps {
    description?: string
    images: Array<ImageSeo>
    titleopenGraph?: string
    descriptionGraph?: string
}

function SEOWrapper({  images, description, titleopenGraph, descriptionGraph }: IProps) {
    return (
        <NextSeo
            title={Titletabbrowser || "Using More of Config"}
            description={description || "This example uses more of the available config options."}
            openGraph={{
                url: webHost,
                title: titleopenGraph || 'Open Graph Title',
                description: descriptionGraph || 'Open Graph Description',
                images: images,
                site_name: SiteName,
            }}
        />
    )
}

export default SEOWrapper;