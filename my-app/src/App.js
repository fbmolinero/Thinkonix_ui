/* import logo from "./logo.svg"; */
import "./App.css";
import React, { useState } from "react";
/* import InputLabel from "@mui/material/InputLabel"; */
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputMask from "react-input-mask";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BpRadio from "../src/components/RadioButtonCustom.js";
import Button from "@mui/material/Button";

function App() {
  const [fabricantes, setFabri] = useState("");
  const [modelo, setModel] = useState("");
  const [ano, setAno] = useState("");
  const [combustivel, setCombus] = useState("");
  const [cep, setCEP] = useState([]);
  const [rua, setRua] = useState("RUA");
  const [bairro, setBairro] = useState("BAIRRO");
  const [cidade, setCidade] = useState("CIDADE");
  const [estado, setEstado] = useState("ESTADO");
  const [tel, setTel] = useState("");
  const [data, setData] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [util, setUtil] = useState("");
  const [civil, setCivil] = useState("");
  const [zkm, setZkm] = useState("");

  const handleChangeFabri = (event) => {
    setFabri(event.target.value);
  };
  const handleChangeModel = (event) => {
    setModel(event.target.value);
  };
  const handleChangeAno = (event) => {
    setAno(event.target.value);
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
    setNome(event);
  };

  const handleChangeData = (event) => {
    setData(event);
  };

  const handleChangeEmail = (event) => {
    setEmail(event);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  const handleChangeCivil = (event) =>{
    setCivil(event.target.value)
  }

  const handleChangeTel = (event) =>{
    setTel(event)
  }

  const handleChangeUtil = (event) =>{
    setUtil(event.target.value)
  }

  const handleChangeZkm = (event) =>{
    setZkm(event.target.value)
  }

  const handleButtonEvent = (event) => {
    console.log(sexo,util,civil,zkm,fabricantes,modelo,ano,combustivel)
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
      <body className="App-Body">
        {/*  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
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
                  <MenuItem value={10}>Test1</MenuItem>
                  <MenuItem value={20}>Test2</MenuItem>
                  <MenuItem value={30}>Test3</MenuItem>
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
                  <MenuItem value={10}>Test1</MenuItem>
                  <MenuItem value={20}>Test2</MenuItem>
                  <MenuItem value={30}>Test3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <h6>Ano de Fabricação</h6>
                <Select
                  labelId="Ano-Select"
                  className="App-Input-form"
                  id="Ano-Select"
                  value={ano}
                  displayEmpty
                  onChange={handleChangeAno}
                >
                  <MenuItem value={10}>Test1</MenuItem>
                  <MenuItem value={20}>Test2</MenuItem>
                  <MenuItem value={30}>Test3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <h6>Combustivel</h6>
                <Select
                  labelId="Combustivel-Select"
                  className="App-Input-form"
                  id="Combustivel--Select"
                  value={combustivel}
                  displayEmpty
                  onChange={handleChangeCombus}
                >
                  <MenuItem value={10}>Test1</MenuItem>
                  <MenuItem value={20}>Test2</MenuItem>
                  <MenuItem value={30}>Test3</MenuItem>
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
              <h6>Zero KM?</h6>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                  onChange={handleChangeZkm}
                >
                  <FormControlLabel
                    value="1"
                    className="marginForm"
                    control={<BpRadio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="2"
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
                    value="Lazer"
                    className="marginForm"
                    control={<BpRadio />}
                    label="Lazer"
                  />
                  <FormControlLabel
                    value="Profissional"
                    className="marginForm"
                    control={<BpRadio />}
                    label="Profissional"
                  />
                  <FormControlLabel
                    value="Aplicativo"
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
              <FormControl id="inputCep" label="CEP: *">
                <InputMask
                  className="App-input-Mask"
                  name="Nome"
                  mask=""
                  maskChar=""
                  alwaysShowMask="true"
                  value={nome}
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
              <FormControl id="inputCep" label="CEP: *">
                <InputMask
                  className="App-input-Mask"
                  name="cep"
                  mask="99/99/99"
                  maskChar=""
                  alwaysShowMask="true"
                  value={data}
                  onChange={handleChangeData}
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
              <FormControl id="inputCep" label="CEP: *">
                <InputMask
                  className="App-input-Mask"
                  name="cep"
                  mask="99/99/99"
                  maskChar=""
                  alwaysShowMask="true"
                  value={tel}
                  onChange={handleChangeTel}
                />
              </FormControl>
              <h6>Email</h6>
              <FormControl id="inputCep" label="CEP: *">
                <InputMask
                  className="App-input-Mask"
                  name="cep"
                  mask="99/99/99"
                  maskChar=""
                  alwaysShowMask="true"
                  value={email}
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

export default App;
