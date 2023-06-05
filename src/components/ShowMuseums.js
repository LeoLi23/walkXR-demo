import React from 'react';
import { Link } from 'react-router-dom';

const ShowMuseums = () => {
    const museums = [
        { id: 1, title: 'Nature Expedition', link: '/VRScene', imageSrc: 'https://firebasestorage.googleapis.com/v0/b/cover-letter-ai-app.appspot.com/o/nature.jpg?alt=media&token=9d0660c9-85a5-44dd-9324-4c845fc81d08' },
        { id: 2, title: 'Journey of the Soul', link: '', imageSrc: 'https://firebasestorage.googleapis.com/v0/b/cover-letter-ai-app.appspot.com/o/soul.jpg?alt=media&token=f6632cb8-7c35-4459-bfef-34eecb449745'},
        { id: 3, title: 'Artistic Voyage', link: '', imageSrc: 'https://firebasestorage.googleapis.com/v0/b/cover-letter-ai-app.appspot.com/o/art.jpg?alt=media&token=591047e4-f87e-4741-a098-f1640b3362b4' },
        { id: 4, title: 'Fantasy Adventure', link: '', imageSrc: 'https://firebasestorage.googleapis.com/v0/b/cover-letter-ai-app.appspot.com/o/fantasy.jpg?alt=media&token=b61c629a-73c8-4ad5-94f3-e327a80d5410' },
        { id: 5, title: 'Cosmic Journey', link: '', imageSrc: 'https://firebasestorage.googleapis.com/v0/b/cover-letter-ai-app.appspot.com/o/cosmic.jpg?alt=media&token=5ac31107-ee0e-4d7c-bdd0-89c005172a6e'},
        { id: 6, title: 'Future Odyssey', link: '', imageSrc: 'https://firebasestorage.googleapis.com/v0/b/cover-letter-ai-app.appspot.com/o/future.jpg?alt=media&token=b028f7e9-37c5-480a-ad1e-9589c3ce5ff5'},
    ];
    

    return (
        <div className='flex flex-col flex-wrap w-full h-full items-center justify-center bg-gray-100 text-gray-800 p-10'>
            <h1 className='text-4xl font-bond mb-8 w-full text-center'>Select a museum</h1>
            <div className='grid grid-cols-3 gap-6 w-4/5 mt-4'>
                {museums.map((museum) => (
                    <Link to={museum.link} key={museum.id}>
                        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                            <div className='h-64 w-full relative'>
                                <img className='absolute h-full w-full object-cover object-center rounded-t-lg' src={museum.imageSrc} alt="" />
                            </div>
                            
                            <div className='p-5'>
                                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{museum.title}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShowMuseums;