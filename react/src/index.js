/* eslint-disable no-octal-escape */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

// eslint-disable-next-line
class Logo extends Component {
    render() {
      console.log(this);
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href='https://www.google.com' target="_blank">Ir para Google</a>
      );
    }
  }

class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
          edit: false,
          id: null,
          dadosFalsos: [{
            id: '1',
            title: 'Ir ao Shopping',
            date: new Date(),
            dt:new Date().toLocaleDateString(),
            dh:new Date().toLocaleTimeString(),
          }, {
            id: '2',
            title: 'Beber água',
            date: new Date(),
            dt:new Date().toLocaleDateString(),
            dh:new Date().toLocaleTimeString(),
          }, {
            id: '3',
            title: 'Correr hoje à noite',
            date: new Date(),
            dt:new Date().toLocaleDateString(),
            dh:new Date().toLocaleTimeString(),
          }]
      }
    }
  
    onSubmitHandle(event) {
      event.preventDefault();
  
      this.setState({
        dadosFalsos: [...this.state.dadosFalsos, {
          id: Date.now(),
          title: event.target.item.value,
          done: false,
          date: new Date(),
          dt:new Date().toLocaleDateString(),
          dh:new Date().toLocaleTimeString(),
        }]
      });
  
      event.target.item.value = '';
    }
  
    onDeleteHandle() {
      let id = arguments[0];
      this.setState({
        // eslint-disable-next-line
        dadosFalsos: this.state.dadosFalsos.filter(item => {
          if (item.id !== id) {
            return item;
          }
        })
      });
    }
  
    onEditHandle(event) {
      this.setState({
        edit: true,
        id: arguments[0],
        title: arguments[1]
      });
    }
  
    onUpdateHandle(event) {
      event.preventDefault();
  
      this.setState({
        dadosFalsos: this.state.dadosFalsos.map(item => {
          if (item.id === this.state.id) {
              item['title'] = event.target.updatedItem.value;
              item['dt'] = new Date().toLocaleDateString();
              item['dh'] = new Date().toLocaleTimeString();
              return item;
          }
  
          return item;
        })
      });
  
      this.setState({
        edit: false
      });
    }
  
    renderEditForm() {
      if (this.state.edit) {
         return <nav class="navbar navbar-light bg-light" >
                  <form class="form-inline" onSubmit={this.onUpdateHandle.bind(this)}>
                    <label for="">Editar tarefa: </label>
                    <input class="form-control mr-sm-2" type="text" name="updatedItem" defaultValue={this.state.title} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Atualizar tarefa</button>
                  </form>
                </nav>
      }
    }

    render() {
      return (
          <div>
            { this.renderEditForm() }
              <nav class="navbar navbar-light bg-light" >
                <form class="form-inline" onSubmit={this.onSubmitHandle.bind(this)}>
                  <label for="">Próxima tarefa: </label>
                  <input class="form-control mr-sm-2" type="text" name="item" placeholder="..." required />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Adicionar tarefa</button>
                </form>
                <Logo />
              </nav>
              <table class="table">
                    <thead class="thead-dark">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Tarefa</th>
                          <th scope="col">Alteração</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                    </thead>
                    {this.state.dadosFalsos.map(item => (
                    <tr>
                      <th scope="row" key={item.id}> </th>
                      <th>{item.title} </th>
                      <th>{"Última alteração: "+item.dt+" "+item.dh}</th>
                      <th><button type="button" class="btn btn-danger" onClick={ this.onDeleteHandle.bind(this, item.id) }>Deletar</button> </th>
                      <th><button onClick={ this.onEditHandle.bind(this, item.id, item.title) }>Editar</button> </th>
                    </tr>
                  ))}
              </table>
          </div>
      );
    }
  }

class Aplicacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
  
    render() {
          return (
              <div className="Aplicacao">
                  <Todo />
              </div>
          );
      }
  }

ReactDOM.render(
  <Aplicacao />
  ,document.getElementById('root')
);
