import React from 'react';
// import ReactPlayer from 'react-player';

const Praise = () => {
    const staticData = [
        {
            title: "Praise From Patients",
            video_url: "https://www.youtube.com/embed/50fddrBecDQ?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Fstage.scoliolife.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=25&forigin=https%3A%2F%2Fstage.scoliolife.com%2F&aoriginsup=1&vf=1"
        }
    ];

    return (
        <>
            {staticData.map((item, index) => (
                <section className="video-patients" key={`key-${index}`} data-aos="fade-up">
                    <h2>{item.title}</h2>
                    {/* <ReactPlayer
                        url={item.video_url}
                        controls
                        width="850px"
                        height="420px"
                    /> */}
                    <iframe
                        src={item.video_url}
                        width="850"
                        height="420"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </section>
            ))}
        </>
    );
};

export default Praise;

