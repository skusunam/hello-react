var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h1>comments..</h1>
                <CommentsList />
                <CommentsForm />
            </div>
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);