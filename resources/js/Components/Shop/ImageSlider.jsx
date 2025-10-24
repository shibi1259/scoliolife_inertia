// import React, { useState, useMemo } from "react";
// import { Modal, ModalBody, ModalHeader, Carousel, CarouselItem, CarouselControl } from "reactstrap";
// import ReactPlayer from 'react-player'
// const ImageSlider = ({ productDetail }) => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Prepare images array (main + gallery)
//     const images = useMemo(() => {
//         if (!productDetail) return [];
//         const gallery = productDetail.product_gallery
//             ? productDetail.product_gallery.split(",").map(img => img.trim()).filter(Boolean)
//             : [];
//         const mainPhoto = productDetail.photo ? [productDetail.photo] : [];
//         return [...mainPhoto, ...gallery];
//     }, [productDetail]);

//     const toggleModal = () => setModalOpen(!modalOpen);
//     const handleThumbnailClick = (index) => {
//         setActiveIndex(index);
//         setModalOpen(true);
//     };

//     const next = () => setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
//     const previous = () => setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

//     if (!productDetail || images.length === 0) return null;

//     return (
//         <div className="row">
//             {/* Big image / video on left */}
//             <div className="col-md-5">
//                 <div className='product-video'>
//                     {productDetail.featured_video_url
//                         ?  <ReactPlayer src={productDetail?.featured_video_url} controls />
//                         : <img src={productDetail.photo} alt="Product" className="img-fluid" />}
//                 </div>
//             </div>

//             {/* Thumbnails on right */}
//             <div className="col-md-2">
//                 <div className='product-img'>
//                     {images.slice(0, 4).map((img, index) => (
//                         <div key={index} onClick={() => handleThumbnailClick(index)} className="mb-2">
//                             <img src={img} alt={`Thumbnail ${index}`} className="img-fluid" />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Modal for full-screen slider */}
//             <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
//                 <ModalHeader toggle={toggleModal}></ModalHeader>
//                 <ModalBody>
//                     <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//                         {images.map((img, index) => (
//                             <CarouselItem key={index}>
//                                 <img src={img} alt={`Slide ${index}`} style={{ width: '100%' }} />
//                             </CarouselItem>
//                         ))}
//                         <CarouselControl direction="prev" onClickHandler={previous} />
//                         <CarouselControl direction="next" onClickHandler={next} />
//                     </Carousel>
//                 </ModalBody>
//             </Modal>
//         </div>
//     );
// };

// export default ImageSlider;
import React, { useMemo, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";

const ImageSlider = ({ productDetail }) => {
  const [modal, setModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Prepare image URLs
  const galleryImages = useMemo(() => {
    if (!productDetail?.product_gallery) return [];
    return productDetail.product_gallery
      .split(",")
      .map((img) => img.trim())
      .filter(Boolean);
  }, [productDetail]);

  const imageUrlArray = [productDetail?.photo, ...galleryImages];
  const toggleModal = () => setModal(!modal);

  const next = () =>
    setActiveIndex((prev) => (prev === imageUrlArray.length - 1 ? 0 : prev + 1));
  const previous = () =>
    setActiveIndex((prev) => (prev === 0 ? imageUrlArray.length - 1 : prev - 1));

  if (!productDetail) return null;

  return (
    <>
      {/* Proper Bootstrap row for left + right alignment */}
      {/* <div className="row align-items-start"> */}
        {/* Left large image/video */}
        <div className="col-md-5">
          <div className="product-video" data-test={productDetail?.featured_video_url}>
            {productDetail?.featured_video_url ? (
              <iframe
                width="100%"
                height="400"
                src={productDetail.featured_video_url}
                title="Product Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={productDetail?.photo}
                alt={productDetail?.title}
                className="img-fluid"
              />
            )}
          </div>
        </div>

        {/* Right small thumbnails */}
        {(galleryImages.length > 0 || productDetail?.photo) && (
          <div className="col-md-2">
            <div className="product-img">
              {imageUrlArray.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="mb-2"
                  onClick={() => {
                    setActiveIndex(index);
                    setModal(true);
                  }}
                >
                  <img src={item} alt={`Thumbnail ${index}`} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        )}
      {/* </div> */}

      {/* Modal with Carousel */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            {imageUrlArray.map((item, index) => (
              <CarouselItem key={index}>
                <img src={item} alt={`Slide ${index}`} style={{ width: "100%" }} />
              </CarouselItem>
            ))}
            <CarouselControl direction="prev" onClickHandler={previous} />
            <CarouselControl direction="next" onClickHandler={next} />
          </Carousel>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ImageSlider;
