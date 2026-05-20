import Sidebar from '@/Components/Sidebar'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { getLocaleForRoute, routeWithLocale } from '@/Utils/localeHelper'
import { Link } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import React from 'react'

const Articles = ({ articles }) => {
    const { t, currentLocale } = useLaravelReactI18n()
    const lang = currentLocale();
    const currentLang = getLocaleForRoute(lang);
    return (
        <AuthenticatedLayout>
            <div className="container">
                <Sidebar />
                <div className='main-article about'>
                    <div className="row">
                        {articles &&
                            articles.map(article => (
                                <div key={article.id} className="col-sm-6">
                                    <div className="treatments-wrpper">
                                        <Link className="rnd-readmore-btn" href={routeWithLocale('articles.show', currentLang, { article: article.slug })}>
                                            <img src={`/storage/${article.image}`} alt='no-image' /></Link>
                                        <h3>{article.title}</h3>
                                        <p>{article.summary}</p>

                                        {/* <p>{moment(article.created_at).format('MMMM Do YYYY')} <b>/</b> {article.creator?.name}</p> */}
                                        <div dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                                        <div className="pt-cv-readmore">
                                            <Link className="rnd-readmore-btn  btn btn-success _self pt-cv-readmore" href={routeWithLocale('articles.show', currentLang, { article: article.slug })}>{t("Patients")['read_more']}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Articles