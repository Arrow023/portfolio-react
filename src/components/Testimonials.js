import React, { Component } from 'react';
export default class HireMe extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      recruiter_name:'Your Name',
      recruiter_mail:'Your email',
      recruiter_contact:'Contact No.',
      recruiter_website:'Website, if any',
      domain_ml:false,
      domain_web:false,
      domain_other:false,
      feedback:null,
      errors:{
        email:null,
        number:null,
        website:null
      }
    }
    this.submit=this.submit.bind(this);
  }
  submit()
  { 
      var subject = 'I '+this.state.recruiter_name+' want to HIRE you';
      var body = 'Recruiter Name : '+this.state.recruiter_name+'%0ARecruiter Mail :'+this.state.recruiter_mail+
                  '%0ARecruiter Website :'+this.state.recruiter_website+'%0AMachine Learning : '+this.state.domain_ml+
                  '%0AWeb Development : '+this.state.domain_web+'%0ACore works : '+this.state.domain_other+
                  '%0AYour Feedback : '+this.state.feedback;
      window.location.href='mailto:piyushchohan48@gmail.com?subject='+subject+'&body='+body;
  }
  handleName(event)
  {
    this.setState({recruiter_name:event.target.value});
  }
  handleMail(event)
  {
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    this.setState({recruiter_mail:event.target.value});
    event.preventDefault();
    let error=this.state.errors;
    error.email=validEmailRegex.test(this.state.recruiter_mail) ? '' : 'Invalid Email';
  }
  handleContact(event)
  {
    this.setState({recruiter_contact:event.target.value});
    const validPhone = RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{8}$/);
    event.preventDefault();
    let error=this.state.errors;
    error.number=validPhone.test(this.state.recruiter_contact) ? '' :'Contact number should be between 10 to 12 characters';
  }
  handleWeb(event)
  {
    this.setState({recruiter_website:event.target.value});
  }
  handleML(event)
  {
    this.setState({domain_ml:event.target.checked});
  }
  handleDWeb(event)
  {
    this.setState({domain_web:event.target.checked});
  }
  handleOther(event)
  {
    this.setState({domain_other:event.target.checked});
  }
  handleFeedback(event)
  {
    this.setState({feedback:event.target.value});
  }

  render() {
    let resumeData = this.props.resumeData;
    let errors=this.state.errors;
    return (
      <div id='testimonials' className="text-container">
      <center><h1 style={{padding:10}}>Hire Me</h1></center>
      <form netlify>
        <div class='form-group row'>
            <label for='yourname' class='col-md-2 col-form-label'>Your Name <i class='fa fa-smile-o fa-lg'></i></label>
            <div class='col-md-4'>
                <input type='text' class='form-control' style={{background:'#fff'}} placeholder={this.state.recruiter_name} onChange={(event)=>this.handleName(event)} />
            </div>
            <label for='email' class='col-md-2 col-form-label'>Your Email-Id <i class='fa fa-at'></i></label>
            <div class='col-md-4'>
                <input type='email' class='form-control' style={{background:'#fff'}}  placeholder={this.state.recruiter_mail} onChange={(event)=>this.handleMail(event)}/>
                { <span style={{color:'#f00'}}>{errors.email}</span>}
            </div>
        </div>
        <div class='form-group row'>
            <label for='contact' class='col-md-2 col-form-label'>Contact No. <i class='fa fa-phone fa-lg'></i></label>
            <div class='col-md-4'>
                <input type='tel' class='form-control' height='100' placeholder={this.state.recruiter_contact} onChange={(event)=>this.handleContact(event)} />
                { <span style={{color:'#f00'}}>{errors.number}</span>}
            </div>
            <label for='website' class='col-md-2 col-form-label'>Your Website <i class='fa fa-globe fa-lg'></i></label>
            <div class='col-md-4'>
                <input type='url' class='form-control'  placeholder={this.state.recruiter_website} onChange={(event)=>this.handleWeb(event)}/>
            </div>
        </div>
        <div class='form-group  row'>
            <label for='domain' class='col-md-2 col-form-label'>Domain of the project <i class='fa fa-list fa-lg'></i></label>
            <div class='col-md-10 '>
                <div class='form-check form-check-inline'>
                    <input type='checkbox' class='form-check-input'  value='' checked={this.state.domain_ml} onChange={(e)=>this.handleML(e)}/>
                    <label class='form-check-label' for='ml'>Machine Learning</label>    
                </div>
                <div class='form-check form-check-inline'>
                    <input type='checkbox' class='form-check-input' id='web' name='web' value='' checked={this.state.domain_web} onChange={(e)=>this.handleDWeb(e)}/>
                    <label class='form-check-label' for='web'>Web Development</label>    
                </div>
                <div class='form-check form-check-inline'>
                    <input type='checkbox' class='form-check-input' id='core' name='core' value='' checked={this.state.domain_other} onChange={(e)=>this.handleOther(e)}/>
                    <label class='form-check-label' for='core'>Other Programming</label>    
                </div>
            </div>
        </div>
        <div class='form-group row'>
            <label for='feedback' class='col-md-2 col-form-label'>Your Feedback <i class='fa fa-comments fa-lg'></i></label>
            <div class='col-md-10'>
                <textarea class='form-control' id='feedback' name='feedback' rows='12' value={this.state.feedback} onChange={(e)=>this.handleFeedback(e)} ></textarea>
            </div>
        </div>
        <div class='form-group row'>
            <div class='offset-md-2 col-md-10'>
                <center><button type='button' class='btn rounded-pill btn-danger' id='hire' onClick={this.submit}>
                    <i class='fa fa-at fa-lg'></i> Hire Me
                </button></center>
            </div>
        </div>                     
      </form>
      </div>
        );
  }
}