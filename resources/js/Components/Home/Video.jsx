// import ReactPlayer from 'react-player';
import React from "react";

const Video = () => {
    return (
        <div className="video-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="video-wrapper">
                            <div className="image-video">
                                <img
                                    src="https://sladmin.scoliolife.com/uploads/2023/08/Take-a-look-inside-our-clinic-300-x-200-px.png"
                                    alt="Take a look inside our clinic"
                                />
                            </div>
                            {/* <ReactPlayer
                                url="https://youtu.be/Gmclw_6zTEg"
                                controls
                                width="750px"
                                height="420px"
                            /> */}
                            <iframe
                                width="750"
                                height="420"
                                src="https://www.youtube.com/embed/Gmclw_6zTEg"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
