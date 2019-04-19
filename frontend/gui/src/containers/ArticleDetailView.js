import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../components/Form'

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://42.60.83.196:1224/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
            <br/>
            <h2>Update Post</h2>
            <CustomForm 
                requestType="put"
                articleID={this.props.match.params.articleID}
                btnText="Update"/>
            </div>
        );
    }
}
export default ArticleDetail;