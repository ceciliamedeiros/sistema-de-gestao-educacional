import React, { useState } from 'react';
import api from './services/api'


function CadastroApp() {
 
    const [email, setEmail] = useState('')
    const [emailRep, setEmailRep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaRep, setSenhaRep] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [celular, setCelular] = useState('')
    const [instituicao, setInstituicao] = useState('')
    const [uf, setUF] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [data_nasc, setData_Nasc] = useState('')
    const [sexo, setSexo] = useState('')


    async function handleSubmit(e){
      e.preventDefault();
      const response = await api.post('/cadastro', {
        email, 
        emailRep,
        senha,
        senhaRep,
        nome,
        cpf,
        celular,
        instituicao,
        uf,
        municipio,
        data_nasc,
        sexo
      })
  
  
      setEmail('');
      setSenha('');
    }
  
  return (
    
    <div class="form">
        <form>
            <div>
                <table width="500px">
                    <tr>
                        <td>E-mail</td>
                        <td>Crie uma senha</td>
                    </tr>
                    <tr>
                        <td><input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)}/></td>
                        <td><input type="password" name="senha" required value={senha} onChange={e => setSenha(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Repita o e-mail</td>
                        <td>Repita a senha</td>
                    </tr>
                    <tr>
                        <td><input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)}/></td>
                        <td><input type="password" name="senha" required value={senha} onChange={e => setSenha(e.target.value)}/></td>
                    </tr>
                </table>
            </div>

            <br><h3 style="margin-left: 20%;"><strong>Dados Cadastrais</strong></h3></br>

            <div style="margin-left: 19%;">
                <input class="input" type="radio" name="opcao" id="aluno" />
                Aluno
                <input class="input" type="radio" name="opcao" id="professor"/>
                Professor
                <input class="input" type="radio" name="opcao" id="coordenador"/>
                Coordenador
            </div>

            <div>
                <table width="500px">
                    <tr>
                        <td>Nome Completo</td>
                        <td>Nome da Instituição</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="nome" required value={nome} onChange={e => setNome(e.target.value)}/></td>
                        <td><input type="text" name="nome_instituicao" required value={instituicao} onChange={e => setInstituicao(e.target.value)}/></td>
                    </tr>
                </table>
            </div>

            <div>
                <table width="560px">
                    <tr>
                        <td>Sexo</td>
                        <td>UF</td>
                    </tr>
                    <tr>
                        <td><select name="sexo">
                                <option value="fem">Feminino</option>
                                <option value="masc">Masculino</option>
                                <option value="outros">Outros</option>
                            </select></td>
                        <td><input type="text" name="uf" required value={uf} onChange={e => setUF(e.target.value)}/></td>
                    </tr>
                </table>
            </div>

            <div>
                <table width="500px">
                    <tr>
                        <td>CPF</td>
                        <td>Município</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="cpf" required value={cpf} onChange={e => setCpf(e.target.value)}/></td>
                        <td><input type="text" name="municipio" required value={municipio} onChange={e => setMunicipio(e.target.value)}/></td>
                    </tr>
                </table>
            </div>

            <div>
                <table>
                    <tr>
                        <td>Celular</td>
                    </tr>
                    <tr>
                        <td><input type="tel" name="celular" required value={celular} onChange={e => setCelular(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Data de Nascimento</td>
                        <td><input type="data" name="dataNasc" required value={data_nasc} onChange={e => setData_Nasc(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><input class="inputdate" type="date" name="data_nasc"/></td>
                    </tr>
                </table><br/>
            </div>

        </form>
    </div>
  );

}

export default CadastroApp;
