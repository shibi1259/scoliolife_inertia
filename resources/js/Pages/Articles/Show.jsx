import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { FaUser, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Article = ({ article }) => {
    return (
        <AuthenticatedLayout>
            <div className='container'>
                <header className='article-titel'>
                    <h1 className="entry-title">{article.title}</h1>
                    <div>
                        {/* <span><SlCalender />{moment(article.created_at).format('MMMM D, YYYY')}</span> */}
                        <span><FaUser /> {article.creator?.name} - ScolioLife</span>
                    </div>
                    <h5 className="social-share-post">
                        <div className="addtoany_shortcode">
                            <a href='https://www.facebook.com/scoliolife/' title='Follow Us on facebook' target='blank'>
                                <FaSquareFacebook />
                            </a>
                            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fscoliolife' title='Follow Us on Twitter' target='blank'>
                                <FaTwitterSquare className='twitter' />
                            </a>
                            <a href='https://drkevinlau.blogspot.com/' title='Follow Us on Blogspot' target='blank'>
                                <FaBlogger className='blogger' />
                            </a>
                            <a href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fscoliolife.com%2Fthe-role-of-muscles-in-stabilization-of-the-spine-in-scoliosis-rehabilitation%2F&linkname=Muscles%20in%20Stabilization%20of%20the%20Spine%20In%20Scoliosis%20Rehabilitation&linknote=In%20scoliosis%20specific%20exercise%20there%20are%202%20different%20camps%20of%20thought%20when%20it%20comes%20to%20strengthening%20weakened%20muscles%20to%20help%20stabilize%20the%20spine."
                                title='Email' target='blank'>
                                <MdEmail className='email' />
                            </a>
                            <a href='https://sg.linkedin.com/in/DrKevinLau' title='Follow Us on Linkedin' target='blank'>
                                <FaLinkedin />
                            </a>
                            <a href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fscoliolife.com%2Fthe-role-of-muscles-in-stabilization-of-the-spine-in-scoliosis-rehabilitation%2F&linkname=Muscles%20in%20Stabilization%20of%20the%20Spine%20In%20Scoliosis%20Rehabilitation&linknote=In%20scoliosis%20specific%20exercise%20there%20are%202%20different%20camps%20of%20thought%20when%20it%20comes%20to%20strengthening%20weakened%20muscles%20to%20help%20stabilize%20the%20spine."
                                title='WhatsUp' target='blank'>
                                <FaWhatsappSquare className='whatsapp' />
                            </a>
                        </div>
                    </h5>
                </header>
                <div className='inner-article'>
                    <img src={`/storage/${article.image}`} alt={article.title} className='article-img' />
                    <div dangerouslySetInnerHTML={{ __html: article.description }} />
                </div>
            </div>
        </AuthenticatedLayout>

    )
};

export default Article;
