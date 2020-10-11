import React from "react";
import { FiChevronRight } from 'react-icons/fi'

import logo from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositories from Github</Title>
      <Form>
        <input type="text" placeholder="Nome do repositório" />
        <button type="submit">Pesquisa</button>
      </Form>
      <Repositories>
        <a href="#">
          <img  src="https://avatars1.githubusercontent.com/u/11358427?s=460&u=6d08e390ad75dbe02b1a9df145fb598d616a8a51&v=4" alt="user logo" />
        
        <div>
          <strong>repository/name</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro commodi cumque vero ad impedit. Ex reiciendis ducimus, repellendus tempore ratione illum, aspernatur a ab architecto pariatur quibusdam necessitatibus veniam?
          </p>
        </div>

        <FiChevronRight size={20} />
        </a>
        
        <a href="#">
          <img  src="https://avatars1.githubusercontent.com/u/11358427?s=460&u=6d08e390ad75dbe02b1a9df145fb598d616a8a51&v=4" alt="user logo" />
        
        <div>
          <strong>repository/name</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro commodi cumque vero ad impedit. Ex reiciendis ducimus, repellendus tempore ratione illum, aspernatur a ab architecto pariatur quibusdam necessitatibus veniam?
          </p>
        </div>

        <FiChevronRight size={20} />
        </a>
        
        <a href="#">
          <img  src="https://avatars1.githubusercontent.com/u/11358427?s=460&u=6d08e390ad75dbe02b1a9df145fb598d616a8a51&v=4" alt="user logo" />
        
        <div>
          <strong>repository/name</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro commodi cumque vero ad impedit. Ex reiciendis ducimus, repellendus tempore ratione illum, aspernatur a ab architecto pariatur quibusdam necessitatibus veniam?
          </p>
        </div>

        <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
