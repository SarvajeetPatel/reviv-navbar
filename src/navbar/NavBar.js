import React, { useState } from 'react'
import MainMenu from './MainMenu'
import { Outlet } from 'react-router-dom'

function NavBar() {
    const [images, setImages] = useState([]);
    function handleImage(headings, nutrients) {
        const img = nutrients.filter(item => item.type === headings)
        setImages(img)
    }

    return (
        <>
            <div className='navbar'>
                {MainMenu.mainMenu.map((services) => (
                    <div className='dropdown'>
                        {services.subMenu.length > 0 || services.nutrients.length > 0 || services.products.length > 0 ?
                            <>
                                <button className='dropbtn' key={services.id}> {services.linkText} </button>
                                <div className='dropdown-content'>
                                    {services.page !== null &&
                                        <div className='header' > <a href={`/${services?.page?.slug}`}>{services?.page?.title}</a> </div>
                                    }
                                    {services.subMenu.length > 0 &&
                                        services.subMenu.map((headings) => (
                                            <div className='column'><a href={headings?.externalLink ? headings?.externalLink : `/${headings?.page?.slug}`}> {headings.menuText} </a></div>
                                        ))
                                    }
                                    {services.nutrients.length > 0 &&
                                        <div className='row'>
                                            <div className='tabs'>
                                                <div>
                                                    {[...new Set(services.nutrients.map(item => item.type))].map((headings) => (
                                                        <ul><button onClick={() => handleImage(headings, services.nutrients)}>{headings}</button></ul>
                                                    ))}
                                                </div>
                                                <div>
                                                    {images.length > 0 ? images.map(serv => (
                                                        serv.icon !== null &&
                                                        <img src={serv?.icon?.url} style={{ height: '50px', width: '50px' }} alt='not' />
                                                    )) :
                                                        services.nutrients.map((serv) => (serv.type === 'B Complex' && serv.icon !== null) &&
                                                            <img src={serv?.icon?.url} style={{ height: '50px', width: '50px' }} alt='not' />)}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {services.products.length > 0 &&
                                        services.products.map((headings) => (
                                            <div className='column'><a href={`/${services?.page?.slug}/${headings.slug}`}> {headings?.title} </a></div>
                                        ))
                                    }
                                </div> </>
                            : <button className='dropbtn'> <a href={`/${services?.page?.slug}`}>{services.linkText}</a> </button>
                        }
                    </div>
                ))}
            </div >
            <Outlet />
        </>
    )
}

export default NavBar