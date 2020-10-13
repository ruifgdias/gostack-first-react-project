import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

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
  const [repos, setRepos] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState("");
  const [newRepo, setNewRepo] = useState("");

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
          <a key={rep.full_name} href="http://localhost.com">
            <img src={rep.owner.avatar_url} alt={rep.owner.login} />

            <div>
              <strong>{rep.full_name}</strong>
              <p>{rep.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
