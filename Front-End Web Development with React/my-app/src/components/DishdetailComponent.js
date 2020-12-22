import { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.dish != null){
            const comments = this.props.dish.comments.map((comment) => {
                return (
                        <Card key={comment.id}>
                            <CardBody>
                                <CardText>{comment.author}</CardText>
                                <CardText>{comment.comment}</CardText>
                                <CardText>{comment.date}</CardText>
                            </CardBody>
                        </Card>
                );
            });
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {comments}
                    </div>
                </div>

            );
        }
        else{
            return(
                <div></div>
            );
        }

    }

}

export default DishDetail;