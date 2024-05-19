import React from 'react';
import '../estilos/LoginForm.css';
import PainelExpansivel from '../pages/Painel';

const ListaDeItensPainelExpansivel1 = () => {
  return (
    <ul>
      <li>Baixo Peso (IMC &lt; 18,5): Desnutrição, fragilidade óssea, deficiências nutricionais.</li>
      <li>Sobrepeso (IMC 25-29,9): Aumenta o risco de doenças cardiovasculares e diabetes.</li>
      <li>Obesidade (IMC ≥ 30): Associada a diversas doenças crônicas e complicações.</li>
    </ul>
  );
};

const Home = () => {
  return (
    <div>
      <PainelExpansivel className="'painel-expansivel primeiro'" titulo="Vantagens de calcular o IMC"
        conteudo={
          <div>
            <p>Monitoramento da Saúde</p>
            <p>Estar na faixa de peso ideal (IMC saudável) está associado a um menor risco de diversas doenças.</p>
            <h2>Identificação de Riscos</h2>
            <ListaDeItensPainelExpansivel1 />
            <br />
            <p>Lembre-se, o IMC é apenas uma ferramenta inicial. Consulte um profissional de saúde para uma avaliação completa.</p>
          </div>
        }
      />


      <PainelExpansivel titulo="Vantagens de calcular a Água"
        conteudo={
          <div>
            <h2>Saúde em dia:</h2>
            <ul id="beneficios">
              <li>Hidratação completa: Corpo funcionando direitinho, sem desidratação, mente afiada e pele radiante.</li>
              <li>Menos doenças: Pressão arterial controlada, rins saudáveis e peso na medida certa.</li>
              <li>Mais energia e disposição: Combata a fadiga, o estresse e tenha pique para os treinos.</li>
            </ul>

            <h2>Produtividade no topo:</h2>
            <ul id="beneficios">
              <li>Foco e concentração: Raciocínio rápido, ideias brilhantes e trabalho impecável.</li>
              <li>Menos estresse: Mente tranquila para você dar o seu melhor.</li>
            </ul>

            <h2>Viva mais:</h2>
            <ul id="beneficios">
              <li>Prevenção de doenças: Beba água e afaste doenças cardíacas, AVC e pedras nos rins.</li>
            </ul>

            <h2>Hábito fácil e saudável:</h2>
            <ul id="beneficios">
              <li>Beba mais água: Aumente sua ingestão de água e sinta os benefícios.</li>
              <li>Escolha bebidas saudáveis: Diga adeus aos refrigerantes e sucos artificiais.</li>
              <li>Sustentabilidade: Um hábito simples e bom para o planeta.</li>
            </ul>

            <p id="resultado">Lembre-se: Consulte um profissional para saber a quantidade ideal de água para você. Beba água e viva mais e melhor!</p>
          </div>
        }
      />


    </div>
  );
};

export default Home;
