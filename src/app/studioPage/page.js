// export default function Studio() {
//     return (
//         <div>
//             <h1 className="text-7xl text-center font-bold text-[#007BFF]">Studio</h1>
//             <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
//                 <div class="-m-1 flex flex-wrap md:-m-2">
//                     <div class="flex w-1/2 flex-wrap">
//                         <div class="w-1/2 p-1 md:p-2">
//                             <img
//                                 alt="gallery"
//                                 class="block h-full w-full rounded-lg object-cover object-center"
//                                 src="/images/snc images/studioPic1_edited.jpg" />
//                         </div>
//                         <div class="w-1/2 p-1 md:p-2">
//                             <img
//                                 alt="gallery"
//                                 class="block h-full w-full rounded-lg object-cover object-center"
//                                 src="/images/snc images/studioPic2_edited.jpg" />
//                         </div>
//                         <div class="w-full p-1 md:p-2">
//                             <img
//                                 alt="gallery"
//                                 class="block h-full w-full rounded-lg object-cover object-center"
//                                 src="/images/snc images/studioPic3_edited.jpg" />
//                         </div>
//                     </div>
//                     <div class="flex w-1/2 flex-wrap">
//                         <div class="w-full p-1 md:p-2">
//                             <img
//                                 alt="gallery"
//                                 class="block h-full w-full rounded-lg object-cover object-center"
//                                 src="/images/snc images/studioPic9.jpg" />
//                         </div>
//                         <div class="w-1/2 p-1 md:p-2">
//                             <img
//                                 alt="gallery"
//                                 class="block h-full w-full rounded-lg object-cover object-center"
//                                 src="/images/snc images/studioPic4_edited.jpg" />
//                         </div>
//                         <div class="w-1/2 p-1 md:p-2">
//                             <img
//                                 alt="gallery"
//                                 class="block h-full w-full rounded-lg object-cover object-center"
//                                 src="/images/snc images/studioPic5_edited.jpg" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client"
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

export default function Studio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [appElement, setAppElement] = useState(null);

    useEffect(() => {
        const nextElement = document.querySelector('#__next');
        if (nextElement) {
            setAppElement(nextElement);
        } else {
            // Automatic opt out for screen-reader hiding if the selector is unavailable
            Modal.setAppElement(undefined);
        }
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const images = [
        "/images/snc images/studioPic1_edited.jpg",
        "/images/snc images/studioPic2_edited.jpg",
        "/images/snc images/studioPic3_edited.jpg",
        "/images/snc images/studioPic9.jpg",
        "/images/snc images/studioPic4_edited.jpg",
        "/images/snc images/studioPic5_edited.jpg"
    ];

    return (
        <div>
            <h1 className="text-7xl text-center font-bold text-[#007BFF]">Studio</h1>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        {images.slice(0, 3).map((src, index) => (
                            <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                    src={src}
                                    onClick={() => openModal(src)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        {images.slice(3).map((src, index) => (
                            <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                    src={src}
                                    onClick={() => openModal(src)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={!!selectedImage}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                appElement={appElement || undefined}
                style={{
                    content: {
                        backgroundColor: 'transparent',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }}
            >
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Selected"
                        onClick={closeModal}
                        className="max-w-full max-h-full rounded-lg cursor-pointer"
                    />
                )}
            </Modal>
        </div>
    );
}