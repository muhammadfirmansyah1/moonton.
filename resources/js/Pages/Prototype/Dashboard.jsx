import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from 'react-flickity-component';
import {Head} from '@inertiajs/inertia-react';
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard()
{
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1"
    };

    return <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                    <title>Dashboard

                    </title>
            </Head>
                <div>
                    <div classNameName="font-semibold text-[22px] text-black mb-[50px]">Featured Movies
                    </div>
                    <Flickity classNameName="gap-[30px]" options={flickityOptions}>

                       {[1,2,3,4].map(i => (
                         
                         <FeaturedMovie key={i} 
                            
                            slug="the-batman"
                            name={'The Batman $(i)'}
                            category="Comedy"
                            thumbnail="/images/browse-2.png"
                            rating={i+1}
                         />   
                       ))}  
                    </Flickity>
                </div>
                <div classNameName="mt-[100px]">
                <div>
                    <div className="font-semibold text-[22px] text-black mt-[50px] mb-10">Browse</div>
                    <Flickity classNameName="gap-[30px]" options={flickityOptions}>
                        {[1,2,3,4,5,6].map((i)=> (
                            <MovieCard
                            key={i}
                            slug="the-batman"
                            name={'The Batman $(i)'}
                            category="Comedy"
                            thumbnail="/images/browse-2.png"
                            />
                        ))}

                    </Flickity>
                </div>
                </div>
               
    </Authenticated>;
}