import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //tira o reload da página
    console.log("Enviando..");
    console.log(name, email, bio, role);

    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>Nome:</span>
        <input
          type="text"
          name="name"
          placeholder="digite seu nome"
          onChange={handleName}
          value={name}
        />
      </label>

      <label>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          placeholder="digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>Bio:</span>
        <textarea
          name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
      </label>

      <label>
        <span>função no sistema</span>
        <select
          name="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        >
          <option value="user">Usuário</option>
          <option value="editor">Editor</option>
          <option value="adimin">Adiministrador</option>
        </select>
      </label>

      <input type="submit" value="enviar" />
    </form>
  );
};

export default MyForm;
