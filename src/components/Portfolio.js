import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,CardLink } from 'reactstrap';
import resumeData from '../resumeData';

class Porfolio extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      toggle:false,
      selected:0,
      modaldata:0
    }
    this.toggle=this.toggle.bind(this);
    this.finditem=this.finditem.bind(this);
  }
  
  toggle()
  {
    this.setState({toggle:!this.state.toggle});
  }
  finditem()
  {
    //console.log("Selected value "+this.state.selected);
   let data=resumeData.portfolio.find((project)=>project.id===this.state.selected);
   this.setState({modaldata:JSON.parse(JSON.stringify(data))});
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <center><p>Hover &amp; Double click on them to know more.</p></center>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" >
                  <div className="item-wrap" >
                      <img src={`${item.imgurl}`} className="item-img" onClick={()=>{this.setState({selected:item.id});this.finditem();this.toggle();}}/>
                      <div className="overlay" onClick={()=>{this.setState({selected:item.id});this.finditem();this.toggle();}}>
                        <div className="portfolio-item-meta" >
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <Modal isOpen={this.state.toggle} toggle={this.toggle}  >
        <ModalHeader>{this.state.modaldata.name}</ModalHeader>
        <ModalBody>
          <Card>
            <CardImg top width="100%" src={this.state.modaldata.imgurl} alt={this.state.modaldata.name} />
            <CardBody>
              <CardTitle><b>{this.state.modaldata.description}</b></CardTitle>
              <CardSubtitle><em>{this.state.modaldata.duration}</em></CardSubtitle>
              <CardText>{this.state.modaldata.detail}</CardText>
              <CardLink href={this.state.modaldata.github} target='_blank'>Click here to see Demo</CardLink>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={()=>{this.toggle();this.setState({selected:0,modaldata:0})}}>Close</Button>
        </ModalFooter>
      </Modal>
  </section>
        );
  }
}

export default Porfolio;