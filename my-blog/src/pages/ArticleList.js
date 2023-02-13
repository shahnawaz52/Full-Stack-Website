import { Link } from "react-router-dom"
import articles from "./article-content";

const ArticleList = () => {
    return (
        <>
            {articles.map(article => (
                <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                    <h1>{article.title}</h1>
                <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}  
        </>
    )
}

export default ArticleList;