import React from 'react'
import {MasonryIcon} from './'

export default function IconMasonry({icons, columns}){
    return(
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(145px, 1fr))`}} >
            {icons.map((icon, index) =>
                <MasonryIcon {...{icon, index, key: index}} />
            )}
        </section>
    )
}