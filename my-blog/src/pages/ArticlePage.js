import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddcommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});
    const { articleId } = useParams();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
        
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, [articleId]);

    const article = articles.find(article => article.name === articleId);

    const addUpVote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updateArticle = response.data;
        setArticleInfo(updateArticle);
    }

    if(!article) {
        return <NotFoundPage />
    }
  
    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                {user ? <button onClick={addUpVote}>Upvote</button>
                      : <button>login to upvote</button>}
                <p>This article has {articleInfo.upvotes} upvote(s)</p>
            </div>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            {user ? <AddcommentForm 
                articleName={articleId} 
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
                : <button>Login to comment</button>}
            <CommentsList comments={articleInfo.comments} />
        </>
    )
}

export default ArticlePage;