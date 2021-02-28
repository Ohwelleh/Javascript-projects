import React from 'react'
import {IconMasonry} from '../components'
import iconData from '../assets/mocks/iconData'

export default function Home () {

    return (
        <section className="container home">
            <div className="row">
                <IconMasonry icons={iconData} columns={4}/>
            </div>
        </section>
    )

}