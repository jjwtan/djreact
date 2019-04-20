import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import CustomForm from '../components/Form'

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://localhost:1224/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
                console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://localhost:1224/api/${articleID}`);
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <br />
                <h2>Update Post</h2>
                <CustomForm
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update" 
                    article={this.state.article}/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>

        );
    }
}
export default ArticleDetail;