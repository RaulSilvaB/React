const TemplateExpressions = () => {
  const name = "Raul";
  const dados = {
    age: 24,
    job: "Desenvolvedor",
  };

  return (
    <div>
      <h2>Ola {name}, como vai?</h2>
      <p>Você atua como: {dados.job}</p>
      <p>Sua idade: {dados.age}</p>
      <p>xx/xx/{2000 + 26}</p>
      <p>{console.log("Pegando as manha")}</p>
    </div>
  );
};

export default TemplateExpressions;
