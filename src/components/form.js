import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: "Patient Records Management System",
      act:0,
      index: '',
      datas:[],
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log("try");

    let datas=this.state.datas;
    let name=this.refs.name.value;
    let disease=this.refs.disease.value;

    if (this.state.act === 0){
      let data={
      name, disease
      }
      
      datas.push(data);
    }
    else{
      let index=this.state.index;
      datas[index].name=name;
      datas[index].disease=disease;
    }
    
    this.setState({
      datas: datas,
      act:0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();

  }

  fRemove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas:datas,
    });
    
    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit =(i) =>{
    let data= this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.disease.value = data.disease;

    this.setState({
      act:1,
      index:i,
    });

    this.refs.name.focus();

  }
  

  render(){
    let datas=this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <div className="bodyData">
          <div className="tableData">
            <pre className="myData">
            {
              datas.map((data, i) =>
              <li key={i} className="myList">
                {i+1}. {data.name} {data.disease}
                  <i onClick={()=>this.fRemove(i)} className="delete" class="fa fa-trash-o" style={{color: 'red', marginLeft: '10%', marginRight: '2%'}}></i>
                  <i onClick={()=>this.fEdit(i)} className="edit" class="fa fa-edit" style={{color: 'purple', marginLeft: '2%'}}></i>
              </li>
              )}
            </pre>
          </div>
          
          <div className="inputFields">
            <form ref="myForm" className="myForm">
              <input type="text" ref="name" placeholder="Patient name" className="formField" />
              <input type="email" ref="disease" placeholder="Patients' disease/condition" className="formField" />
              <button onClick={this.fSubmit} className="myButton">Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    );

}
  }

export default Form;



