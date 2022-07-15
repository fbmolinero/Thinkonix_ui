import "../App.css";
import header from "../img/Frame.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import httpClient from "../services/client.js";
import { HalfMalf } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

function Loading() {
  let history = useHistory();

  const status = localStorage.getItem("status");
  const status2 = localStorage.getItem("status2");

  const fabriname = localStorage.getItem("nome_fabricante");
  const fabriID = localStorage.getItem("codigo_fabricante");
  const modelname = localStorage.getItem("nome_modelo");
  const modelid = localStorage.getItem("codigo_modelo");
  const anoF = localStorage.getItem("ano_fabricacao");
  const anoM = localStorage.getItem("ano_modelo");
  const zkm = localStorage.getItem("zero_km");
  const combustivel = localStorage.getItem("combustivel");
  const util = localStorage.getItem("codigo_uso_veiculo");
  const cep = localStorage.getItem("cep");
  const num = localStorage.getItem("numero_endereco");
  const rua = localStorage.getItem("rua");
  const bairro = localStorage.getItem("bairro");
  const cidade = localStorage.getItem("cidade");
  const estado = localStorage.getItem("estado");
  const nome = localStorage.getItem("nome_condutor");
  const data = localStorage.getItem("data_nascimento_condutor");
  const sexo = localStorage.getItem("sexo_condutor");
  const civil = localStorage.getItem("estado_civil_condutor");
  const cpf = localStorage.getItem("cpf_condutor");
  const cnh = localStorage.getItem("data_emissao_cnh_condutor");
  const email = localStorage.getItem("email_condutor");
  const tel = localStorage.getItem("telefone_condutor");
  const val = zkm === "true";

/*   console.log(
    fabriname,
    fabriID,
    modelname,
    modelid,
    anoF,
    anoM,
    zkm,
    combustivel,
    util,
    cep,
    num,
    rua,
    bairro,
    cidade,
    estado,
    nome,
    data,
    sexo,
    civil,
    cpf,
    cnh,
    email,
    tel
  ); */

  if (status !== false && status2 !== false) {
    httpClient
      .post("/quotation/quote", {
        nome_fabricante: fabriname,
        codigo_fabricante: fabriID,
        nome_modelo: modelname,
        codigo_modelo: modelid,
        ano_fabricacao: parseInt(anoF),
        ano_modelo: parseInt(anoM),
        zero_km: val,
        combustivel: combustivel,
        codigo_uso_veiculo: util,
        cep: cep,
        numero_endereco: num,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        nome_condutor: nome,
        data_nascimento_condutor: data,
        sexo_condutor: sexo,
        estado_civil_condutor: civil,
        cpf_condutor: cpf,
        data_emissao_cnh_condutor: cnh,
        email_condutor: email,
        telefone_condutor: tel,
      })
      .then((res) => {
        console.log("FEITO COM SUCESSO");
        localStorage.setItem(
          "Assis24hr",
          res.data.mao_na_roda.data.data.valor_assistencia24hs_ate100km
        );
        localStorage.setItem(
          "GuinchoIli",
          res.data.mao_na_roda.data.data.valor_assistenciaGuinchoIlimitado
        );
        localStorage.setItem(
          "P_reparo",
          res.data.mao_na_roda.data.data.valor_assistenciaPequenosReparos
        );
        localStorage.setItem(
          "AssisResidencial",
          res.data.mao_na_roda.data.data.valor_assistenciaResidencial
        );
        localStorage.setItem(
          "DanosT",
          res.data.mao_na_roda.data.data.valor_premio_danostotais
        );
        localStorage.setItem(
          "Furtos",
          res.data.mao_na_roda.data.data.valor_premio_roubofurto
        );
        localStorage.setItem(
          "TPremium",
          res.data.pay_per_use.data.response.total_premium
        );
        localStorage.setItem(
          "V_km",
          res.data.pay_per_use.data.response.value_per_km
        );
        history.push("/finalpage");
      })
      .catch((err) => {
        alert(
          "Erro ao Processar seus Dados , Favor Retornar a Pagina Anterior !"
        );
      });
  } else {
  }

  return (
    <div className="Loading">
      <header>
        <div className="Header-IMG">
          <img src={header} />
        </div>
      </header>
      <body className="Loading-Body">
        <div className="Loading-div">
          <HalfMalf
            text={"Calculando Cotação"}
            bgColor={"#fffff"}
            width={"150px"}
            height={"150px"}
          />
        </div>
      </body>
    </div>
  );
}

export default Loading;
