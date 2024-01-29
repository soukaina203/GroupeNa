import React from 'react'

function Video() {
    return (
        <div>
            <section className="flex items-center justify-center w-full h-screen overflow-hidden bg-gray-900 ">
                <video src=
                    "Videos/KnowUs.mp4"
                    autoplay="{true}" loop muted
                    className="min-w-full min-h-full ">
                </video>

            </section>
        </div>
    )
}

export default Video
