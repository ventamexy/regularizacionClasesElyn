import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "regularizacionClases"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'regularizacionClases',
        'fields.slug': params.slug
    })

    return {
        props: { recipe: items[0] }
    }

}

export default function RecipeDetails({ recipe }) {
    const { featuredImage, title, serviceTime, services, method } = recipe.fields
    // console.log(method)

    return (
        <div className="slug-box-main">
            <div className="container">
                <div>
                    <div className="banner">
                        <Image
                            src={'https:' + featuredImage.fields.file.url}
                            width={featuredImage.fields.file.details.image.width}
                            height={featuredImage.fields.file.details.image.height}
                        />
                        <h2>{title}</h2>
                    </div>

                    <div className="info">
                        {/* <p>Takes about {serviceTime} mins to cook.</p> */}
                        <h3>Servicios:</h3>

                        {services.map(ing => (
                            <span key={ing}>
                                <i className="fas fa-check"></i> { ing}
                                <br />
                            </span>
                        ))}
                    </div>

                    <div className="method">
                        <h3>Descripción:</h3>
                        <div>{documentToReactComponents(method)}</div>
                    </div>

                    <div className="actions">
                        <Link href="../our-services">
                            <a>regresar</a>
                        </Link>
                    </div>

                    <style jsx>{`
                        h2,h3 {
                        text-transform: uppercase;
                        }
                        .banner h2 {
                        margin: 0;
                        background: #fff;
                        display: inline-block;
                        padding: 20px;
                        position: relative;
                        top: -60px;
                        left: -10px;
                        transform: rotateZ(-1deg);
                        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                        }
                        .info p {
                        margin: 0;
                        }

                        .actions {
                            margin-top: 20px;
                            display: flex;
                            justify-content: flex-end;
                            }
                        .actions a {
                            color: #fff;
                            background: #f01b29;
                            padding: 16px 24px;
                            text-decoration: none;
                            }
                    
                    `}
                    </style>
                </div>
            </div>
        </div>

    )
}