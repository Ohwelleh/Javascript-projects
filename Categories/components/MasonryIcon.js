import React from 'react'

export default function MasonryIcon ({icon}){

    return (
        <div className="masonry-icon overlay">
            <div className="icon-text">
                <div className="icon-icon">
                    {icon.icon}
                </div>
                <div>
                    <h2 className="icon-title">
                        {icon.title}
                    </h2> 
                </div>

            </div>
        </div>
    )

}