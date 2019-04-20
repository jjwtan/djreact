import React from 'react';
import axios from 'axios';
import {
    Form, Input, Button,
} from 'antd';

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        const avatar = event.target.elements.avatar.value;
        const image = event.target.elements.image.value;

        switch (requestType) {
            case 'post':
                return axios.post('http://42.60.83.196:1224/api/', {
                    title: title,
                    content: content,
                    image_url: image,
                    avatar: avatar
                })
                    .then(res => console.log(res))
                    .catch(err => console.err(err))
            case 'put':
                return axios.put(`http://42.60.83.196:1224/api/${articleID}/`, {
                    title: title,
                    content: content,
                    image_url: image,
                    avatar: avatar
                })
                    .then(res => console.log(res))
                    .catch(err => console.err(err))
        }
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={(event) => this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID,
                    )}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}>
                    <Form.Item label="Title">
                        <Input
                            name="title"
                            placeholder="Put title here"
                            required
                            value={this.props.article != null ? this.props.article.title : "" }
                        />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input
                            name="content"
                            placeholder="Enter some content ..."
                            required
                            value={this.props.article != null ? this.props.article.content : "" }
                        />
                    </Form.Item>
                    <Form.Item label="Avatar">
                        <Input
                            name="avatar"
                            placeholder="avatar url here"
                            required
                            value={this.props.article != null ? this.props.article.avatar : "" }
                        />
                    </Form.Item>
                    <Form.Item label="Image">
                        <Input
                            name="image"
                            placeholder="image url here"
                            required
                            value={this.props.article != null ? this.props.article.image_url : "" }
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;