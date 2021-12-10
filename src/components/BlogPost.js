import { useParams } from 'react-router-dom';
// useParams is a hook by react router to show id/number of the blog post

function BlogPost() {
    // create a variable called 'params'
    const params = useParams()

    return (
        <div>
            <h1>Blog Post {params.id}</h1>
            <p>{params.name}</p>
        </div>
    )
}

export default BlogPost;
