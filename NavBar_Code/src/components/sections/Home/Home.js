
import Section from '../../../HOC/Section';
import Link from '../../UI/Link/Link';
import sr4 from '../../images/a.png'
import sr1 from '../../images/b.png'
import sr2 from '../../images/c.png'
import sr3 from '../../images/d.png'

import React, {Component} from "react"
import {Button} from 'react-bootstrap'
//import Card from "react-bootstrap/Card";
//import {Grid, Card, Icon, Image,CardGroup } from 'semantic-ui-react'
//import {  CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Button
//} from 'reactstrap';
import {Card, CardGroup,CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';

const home = () => {
	return (
		<div>
		<CardGroup style={{padding: 90}}>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr4} ></CardImg>
		<CardBody>
		<CardTitle tag="h1">Cotton</CardTitle>
		<CardText> </CardText>
		<Button>View</Button>
		</CardBody>
		</Card>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr1} ></CardImg>
		<CardBody>
		<CardTitle tag="h1">Sugar Cane</CardTitle>
		<CardText> </CardText>
		<Button>View</Button>
		</CardBody>
		</Card>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr2} ></CardImg>
		<CardBody>
		<CardTitle tag="h1">Sunflower</CardTitle>
		<CardText> </CardText>
		<Button>View</Button>
		</CardBody>
		</Card>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr3} ></CardImg>
		<CardBody>
		<CardTitle tag="h1">Wheat</CardTitle>
		<CardText> </CardText>
		<Button>View</Button>
		</CardBody>
		</Card>
		</CardGroup>
		</div>

	);
};

export default home;
