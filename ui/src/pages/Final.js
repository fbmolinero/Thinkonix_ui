import "../App.css";
import header from "../img/Frame.png";
import labeldiv from "../img/Frame2.png";
import React from "react";
import Button from "@mui/material/Button";

localStorage.removeItem("status");
localStorage.removeItem("status2");

localStorage.removeItem("nome_fabricante");
localStorage.removeItem("codigo_fabricante");
localStorage.removeItem("nome_modelo");
localStorage.removeItem("codigo_modelo");
localStorage.removeItem("ano_fabricacao");
localStorage.removeItem("ano_modelo");
localStorage.removeItem("zero_km");
localStorage.removeItem("combustivel");
localStorage.removeItem("codigo_uso_veiculo");
localStorage.removeItem("cep");
localStorage.removeItem("numero_endereco");
localStorage.removeItem("rua");
localStorage.removeItem("bairro");
localStorage.removeItem("cidade");
localStorage.removeItem("estado");
localStorage.removeItem("nome_condutor");
localStorage.removeItem("data_nascimento_condutor");
localStorage.removeItem("sexo_condutor");
localStorage.removeItem("estado_civil_condutor");
localStorage.removeItem("cpf_condutor");
localStorage.removeItem("data_emissao_cnh_condutor");
localStorage.removeItem("email_condutor");
localStorage.removeItem("telefone_condutor");

const vasns = localStorage.getItem("TPremium");
const vkm = localStorage.getItem("V_km");
const assis24hr = localStorage.getItem("Assis24hr");
const guinchoili = localStorage.getItem("GuinchoIli");
const p_reparo = localStorage.getItem("P_reparo");
const assisres = localStorage.getItem("AssisResidencial");
const danost = localStorage.getItem("DanosT");
const furtos = localStorage.getItem("Furtos");


function Final() {
  return (
    <div className="Final">
      <header>
        <div className="Header-IMG">
          <img src={header} />
        </div>
      </header>
      <body className="Final-Body">
        <div className="App-Conteiner">
          <div className="Final-Conteiner-div1">
            <div className="Final-Conteiner-form">
              <img className="Img-label" src={labeldiv} />
              <h3>Seguro Mão na Roda</h3>
              <h3>Perda Total</h3>
              <h5>
                Seguro mensal perda total com preço fixo - Coberturas adicionais
                opcionais
              </h5>
              <p className="FinalPageText">
                Valor mensal do seguro perda total:{" "}
                <strong>R${danost}</strong>
              </p>
              <p className="FinalPageText">
                Valor mensal do seguro perda total + roubo e furto:{" "}
                <strong>R${furtos}</strong>
              </p>
              <h6>Opcionais:</h6>
              <p className="FinalPageText">
                +<strong>R${guinchoili}</strong> por Guincho ilimitado
              </p>
              <p className="FinalPageText">
                + <strong>R${assisres}</strong> por Assistência Residencial
              </p>
              <p className="FinalPageText">
                +<strong>R${p_reparo}</strong> por Assistência Pequenos Reparos
              </p>
              <p className="FinalPageText">
                + <strong>R${assis24hr}</strong> por Assistência 24 horas até
                100km
              </p>
              <Button className="App-Button2">Contratar Cotação</Button>
            </div>
          </div>
          <div className="Final-Conteiner-div1">
            <div className="Final-Conteiner-form">
              <img className="Img-label" src={labeldiv} />
              <div className="Final-div">
                <h3>Seguro Auto Pay</h3>
                <h3>Per Use</h3>
                <h5>
                  Seguro mensal perda total com preço fixo - Coberturas
                  adicionais opcionais
                </h5>
                <p className="FinalPageText">
                  Valor da assinatura mensal do seu seguro:
                  <strong>R${vasns}</strong>
                </p>
                <p className="FinalPageText">
                  <strong>+</strong>
                </p>
                <p className="FinalPageText">
                  Valor por Km rodado: <strong>R${vkm}</strong>
                </p>
              </div>
              <div className="Final-div">
                <Button className="App-Button2">Contratar Cotação</Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Final;
