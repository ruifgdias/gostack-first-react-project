import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom'

import logo from "../../assets/logo.svg";
import { Title, Form, Repositories, Error } from "./styles";

import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>(() =>{
    const storedRepos = localStorage.getItem("@GithubExplorer:repositories");

    if (storedRepos) {
      return JSON.parse(storedRepos);
    }
    else {
      return [];
    }
  });
  const [inputError, setInputError] = useState("");
  const [newRepo, setNewRepo] = useState("");

  useEffect(()=> {
    localStorage.setItem("@GithubExplorer:repositories", JSON.stringify(repos));
  }, [repos]);

  async function handleAddRepo(ev: FormEvent<HTMLFormElement>): Promise<void> {
    ev.preventDefault();

    setInputError('');

    if(!newRepo)
      return setInputError("Digite o nome do Repositório");

      try {
    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repo = response.data;

    setRepos([...repos, repo]);
      } catch(err) {
        setInputError('Erro na pesquisa do Repositório');
      }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositories from Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepo}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Nome do repositório"
        />
        <button type="submit">Pesquisa</button>
      </Form>
      { inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repos.map((rep) => (
          <Link key={rep.full_name} to={`/repository/${rep.full_name}`}>
            <img src={rep.owner.avatar_url} alt={rep.owner.login} />

            <div>
              <strong>{rep.full_name}</strong>
              <p>{rep.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
