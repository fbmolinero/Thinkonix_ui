import "../App.css";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputMask from "react-input-mask";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BpRadio from "../components/RadioButtonCustom.js";
import Button from "@mui/material/Button";
import httpClient from "../services/client.js";
import axios from "axios";
import header from "../img/Frame.png"

function Home() {
  const [fabriID, setFabri] = useState("");
  const [fabricantes, setFabriID] = useState(0);
  const [fabriname, setFabriName] = useState("");
  const [fabricantesarr, setFabriArray] = useState([""]);
  const [modelid, setModel] = useState("");
  const [modelo, setModelid] = useState(0);
  const [modelname, setModelName] = useState("");
  const [modelsarr, setModelArray] = useState([]);
  const [anoF, setAnoF] = useState();
  const [anoM, setAnoM] = useState();
  const [combustivel, setCombus] = useState("");
  const [combusarr, setCombusArr] = useState([]);
  const [cep, setCEP] = useState([]);
  const [rua, setRua] = useState("RUA");
  const [bairro, setBairro] = useState("BAIRRO");
  const [cidade, setCidade] = useState("CIDADE");
  const [estado, setEstado] = useState("ESTADO");
  const [num, setNum] = useState("");
  const [tel, setTel] = useState("");
  const [data, setData] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCPF] = useState("");
  const [cnh, setCNH] = useState("");
  const [util, setUtil] = useState(0);
  const [civil, setCivil] = useState("");
  const [zkm, setZkm] = useState(true);
  const [condição, setCondição] = useState(true);
  const [status, setStatus] = useState(false);

  localStorage.setItem("status", false);

  const controller = new AbortController();
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  if (condição === true) {
    httpClient
      .get("/quotation/manufacturers", {
        cancelToken: source.token,
        signal: controller.signal,
      })
      .then((res) => {
        setFabriArray(res.data);
        controller.abort();
      })
      .catch((err) => {
        controller.abort();
        console.log("Erro ao Buscar Fabricantes");
      });
    setCondição(false);
  } else {
  }

  const handleChangeFabri = (event) => {
    setFabriID(event.target.value);
    setFabri(event.target.value.id);
    setFabriName(event.target.value.name);
    httpClient
      .get("/quotation/models", {
        params: { manufacturer_code: event.target.value.id },
      })
      .then((res) => {
        console.log(res.data);
        setModelArray(res.data);
        setModelid(res.data.id);
      })
      .catch((err) => {
        console.log("Erro ao Buscar Modelos", err);
      });
  };

  const handleChangeModel = (event) => {
    setModelid(event.target.value);
    setModel(event.target.value.id);
    setModelName(event.target.value.name);
    httpClient
      .get("/quotation/models/years", {
        params: { model_code: event.target.value.id },
      })
      .then((res) => {
        console.log(res.data);
        setAnoF(res.data.manufacture_year);
        setAnoM(res.data.model_year);
      });
    httpClient.get("/quotation/fuel_types").then((res) => {
      console.log(res.data);
      setCombusArr(res.data);
    });
  };
  const handleChangeCPF = (event) => {
    setCPF(event.target.value);
  };
  const handleChangeNum = (event) => {
    setNum(event.target.value);
  };
  const handleChangeCNH = (event) => {
    setCNH(event.target.value);
  };
  const handleChangeCombus = (event) => {
    setCombus(event.target.value);
  };

  const handleChangeCEP = (event) => {
    const value = event.target.value;
    setCEP(value);
    buscarCep();
  };

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeData = (event) => {
    console.log(event.target.value);
    setData(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setStatus(true);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  const handleChangeCivil = (event) => {
    setCivil(event.target.value);
  };

  const handleChangeTel = (event) => {
    setTel(event.target.value);
  };

  const handleChangeUtil = (event) => {
    setUtil(event.target.value);
  };

  const handleChangeZkm = (event) => {
    setZkm(event.target.value);
  };

  const handleButtonEvent = (event) => {
    if (status !== false) {
      httpClient
        .post("/quotation/quotes", {
          nome_fabricante: fabriname,
          codigo_fabricante: fabriID,
          nome_modelo: modelname,
          codigo_modelo: modelid,
          ano_fabricacao: anoF,
          ano_modelo: anoM,
          zero_km: zkm,
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
          console.log("POST FEITO COM SUCESSO");
        })
        .catch((err) => {
          console.log(err);
          console.log(
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
            data,
            cnh
          );
          alert(
            "Algum Campo em Brancoo ou Preenchido Incorretamente , Favor Verifique Todos os Campos"
          );
        });
    } else {
    }
  };

  const buscarCep = () => {
    if (cep.length <= 8) {
      return;
    } else if (cep.length === 9) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          const estado = data.uf;
          setEstado(estado);
          const local = data.localidade;
          setCidade(local);
          const brro = data.bairro;
          setBairro(brro);
          const logradouro = data.logradouro;
          setRua(logradouro);
        });
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header>
        <div className="Header-IMG">
          <img src={header} />
        </div>
      </header>
      <body className="App-Body">
        <div className="App-logo-div">
          <h1>Faça Sua Cotação Agora Mesmo!</h1>
        </div>
        <h2 className="h2-top">Cotação de Seguro Auto</h2>
        <div className="App-Conteiner">
          <div className="App-Conteiner-div1">
            <div className="App-Conteiner-form">
              <h4>Veiculo</h4>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <h6>Fabricante</h6>
                <Select
                  labelId="Fabricantes-Select"
                  className="App-Input-form"
                  id="Fabricantes-Select"
                  value={fabricantes}
                  displayEmpty
                  onChange={handleChangeFabri}
                >
                  {fabricantesarr.map((option) => (
                    <MenuItem key={option.id} value={option}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <h6>Modelo</h6>
                <Select
                  labelId="Modelo-Select"
                  className="App-Input-form"
                  id="Modelo-Select"
                  value={modelo}
                  displayEmpty
                  onChange={handleChangeModel}
                >
                  {modelsarr.map((option) => (
                    <MenuItem key={option.name} value={option}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <h6>Ano de Fabricação</h6>
              <FormControl id="inputAno" label="Ano: *">
                <InputMask
                  className="App-input-Mask"
                  name="Ano"
                  maskChar=""
                  alwaysShowMask="true"
                  disabled
                  value={anoM}
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <h6>Combústivel</h6>
                <Select
                  labelId="Combústivel-Select"
                  className="App-Input-form"
                  id="Combústivel-Select"
                  value={combustivel}
                  displayEmpty
                  onChange={handleChangeCombus}
                >
                  {combusarr.map((option) => (
                    <MenuItem
                      key={option.name}
                      value={option.value}
                      name={option.name}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <h6>CEP</h6>
              <FormControl id="inputCep" label="CEP: *">
                <InputMask
                  className="App-input-Mask"
                  name="cep"
                  mask="99999-999"
                  maskChar=""
                  alwaysShowMask="true"
                  value={cep}
                  onChange={handleChangeCEP}
                />
              </FormControl>
              <p>
                {rua},{bairro},{cidade},{estado}
              </p>
              <h6>Nº Endereço / Complemento</h6>
              <FormControl id="inputNumEnd" label="Nº: *">
                <InputMask
                  className="App-input-Mask"
                  name="num"
                  mask=""
                  maskChar=""
                  alwaysShowMask="true"
                  value={num}
                  onChange={handleChangeNum}
                />
              </FormControl>
              <h6>Zero KM?</h6>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                  onChange={handleChangeZkm}
                >
                  <FormControlLabel
                    value={true}
                    className="marginForm"
                    control={<BpRadio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value={false}
                    className="marginForm"
                    control={<BpRadio />}
                    label="Não"
                  />
                </RadioGroup>
              </FormControl>
              <h6>Utilização:</h6>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                  onChange={handleChangeUtil}
                >
                  <FormControlLabel
                    value={1}
                    className="marginForm"
                    control={<BpRadio />}
                    label="Lazer"
                  />
                  <FormControlLabel
                    value={2}
                    className="marginForm"
                    control={<BpRadio />}
                    label="Profissional"
                  />
                  <FormControlLabel
                    value={3}
                    className="marginForm"
                    control={<BpRadio />}
                    label="Aplicativo"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="App-Conteiner-div2">
            <div className="App-Conteiner-form2">
              <h4>Condutor</h4>
              <h6>Nome</h6>
              <FormControl id="inputnome" label="Nome: *">
                <InputMask
                  className="App-input-Mask"
                  name="Nome"
                  mask=""
                  type="name"
                  maskChar=""
                  alwaysShowMask="true"
                  onChange={handleChangeNome}
                />
              </FormControl>
              <h6>Sexo</h6>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                  className="App-radio-form-group"
                  onChange={handleChangeSexo}
                >
                  <FormControlLabel
                    value="Outro"
                    className="marginForm2"
                    control={<BpRadio />}
                    label="Outro"
                  />
                  <FormControlLabel
                    value="Femenino"
                    className="marginForm2"
                    control={<BpRadio />}
                    label="Femenino"
                  />
                  <FormControlLabel
                    value="Mascolino"
                    className="marginForm2"
                    control={<BpRadio />}
                    label="Mascolino"
                  />
                </RadioGroup>
              </FormControl>
              <h6>Data de Nascimento</h6>
              <FormControl id="inputdata" label="DATA: *">
                <InputMask
                  className="App-input-Mask"
                  name="data"
                  mask="99/99/9999"
                  maskChar=""
                  alwaysShowMask="true"
                  onChange={handleChangeData}
                />
              </FormControl>
              <h6>CPF</h6>
              <FormControl id="inputcpf" label="CPF: *">
                <InputMask
                  className="App-input-Mask"
                  name="CPF"
                  mask="999.999.999-99"
                  maskChar=""
                  alwaysShowMask="true"
                  onChange={handleChangeCPF}
                />
              </FormControl>
              <h6>Data de Emissão CNH</h6>
              <FormControl id="inputECNH" label="CNH: *">
                <InputMask
                  className="App-input-Mask"
                  name="Emissão CNH"
                  mask="99/99/9999"
                  maskChar=""
                  alwaysShowMask="true"
                  onChange={handleChangeCNH}
                />
              </FormControl>
              <h6>Estado Civil</h6>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                  className="App-radio-form-group"
                  onChange={handleChangeCivil}
                >
                  <FormControlLabel
                    value="Solteiro"
                    className="marginForm2"
                    control={<BpRadio />}
                    label="Solteiro"
                  />
                  <FormControlLabel
                    value="Casado"
                    className="marginForm2"
                    control={<BpRadio />}
                    label="Casado"
                  />
                  <FormControlLabel
                    value="Viuvo/a"
                    className="marginForm2"
                    control={<BpRadio />}
                    label="Viuvo/a"
                  />
                </RadioGroup>
              </FormControl>
              <h6>Telefone</h6>
              <FormControl id="inputtel" label="TEL: *">
                <InputMask
                  className="App-input-Mask"
                  name="tel"
                  mask="(99) 99999-9999"
                  maskChar=" "
                  alwaysShowMask="true"
                  onChange={handleChangeTel}
                />
              </FormControl>
              <h6>Email</h6>
              <FormControl id="inputEmail" label="Email: *">
                <InputMask
                  className="App-input-Mask"
                  name="Email"
                  mask=""
                  maskChar=""
                  alwaysShowMask="true"
                  onChange={handleChangeEmail}
                />
              </FormControl>
            </div>
            <Button className="App-Button" onClick={handleButtonEvent}>
              Calcular Cotação
            </Button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
