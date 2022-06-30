import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
import article from '../pages/article/[id]'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid} >
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList