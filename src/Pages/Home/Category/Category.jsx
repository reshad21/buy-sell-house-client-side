import React from 'react';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: 'LENOVO',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv10lWM7gBfiEsdj4ooYGH_34Tz4qqjV9Dg&usqp=CAU'
        },
        {
            id: 2,
            name: 'DELL',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_c-gda5PREVRaly7HGFcGgGkSBPmGGDZNew&usqp=CAU'
        },
        {
            id: 3,
            name: 'ASUS',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt87G_8rat0eVQjxJ89RxAt7X20Btz7C-wsQ&usqp=CAU'
        }
    ]
    return (
        <div className='px-5 my-10'>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    categories.map(category => {
                        return (
                            <div key={category.id} className="card shadow-xl">
                                <figure className="px-7 pt-7">
                                    <img src={category.picture} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{category.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">SEE ALL</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Category;