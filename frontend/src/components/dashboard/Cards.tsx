import React, {FC} from "react";
import {Col, Row} from "react-bootstrap";

interface Props {
    cardData?: any;
    title: String;
}

const Cards: FC<Props> = (props: Props) => {
    const {title, cardData} = props;
    return (
        <div className="card">
            <Row>
                <Col md={8}>
                    <div className="card-header bg-danger"><h4>{title}</h4></div>
                </Col>
            </Row>
            {/*<div className="card-body">*/}
            {/*    <Row>*/}
            {/*        <Col md={4}>Header</Col>*/}
            {/*        <Col md={4}>{cardData.header}</Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col md={4}>Body</Col>*/}
            {/*        <Col md={4}>{cardData.body}</Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col md={4}>Footer</Col>*/}
            {/*        <Col md={4}>{cardData.footer}</Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
        </div>
    );
}
export default Cards;