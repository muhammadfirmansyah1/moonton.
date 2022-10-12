import Authenticated from '@/Layouts/Authenticated/index';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import { Inertia } from '@inertiajs/inertia';

export default function Edit({auth, movie})
{
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type==="file" ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if(data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };

    return  <Authenticated auth={auth}> 
        <Head title="Admin"/>
        <h1 className='text-xl'>Update a Movie {movie.name} </h1>
        <hr className='mb-4'/>
        <InputError errors={errors}/>
        <form onSubmit={submit}>
               <InputLabel forInput="name" value="Name"/>
               <TextInput
                type='text'
                name='name'
                defaultValue={movie.name}
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the name of the movie"
                isError={errors.name}
               />

                <InputLabel forInput="category" value="Category" className="mt-4"/>
               <TextInput
                type='text'
                name='category'
                defaultValue={movie.category}
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the category of the movie"
                isError={errors.category}
               />

                <InputLabel forInput="video_url" value="Video URL" className="mt-4"/>
               <TextInput
                type='url'
                name='video_url'
                defaultValue={movie.video_url}
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the video_url of the movie"
                isError={errors.video_url}
               />

                <InputLabel forInput="thumbnail" value="Thumbnail" className="mt-4"/>
               <TextInput
                type='file'
                name='thumbnail'
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Insert thumbnail of the movie"
                isError={errors.thumbnail}
               />

                <InputLabel forInput="rating" value="Rating" className="mt-4"/>
               <TextInput
                type='number'
                name='rating'
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Insert thumbnail of the movie"
                isError={errors.rating}
               />

               <div className='flex flex-row mt-4 items-center'>
               <InputLabel forInput="is_featured" value="Is Featured" className="mr-3 mt-1"/>
                <Checkbox
                    name="is_featured"
                    handleChange={(e) => setData ("is_featured", e.target.checked)}
                />
               </div>

               <PrimaryButton type="submit" className='mt-4' processing={processing}>  
                Save

                </PrimaryButton>
               
            </form>
</Authenticated>
}