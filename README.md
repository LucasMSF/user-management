<h1 align="center">
   🔐 <a href="#"> Plataforma de Controle de usuários</a>
</h1>

<br>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#como-executar-o-projeto">Como Executar o Projeto</a> •
 <a href="#imagens">Imagens</a> •
 <a href="#feito-com">Feito com</a> • 
 <a href="#autor">Autor</a> 
</p>

## Sobre

<p>Esse projeto tem como objetivo mostrar/exercictar meus conhecimentos em PHP (Laravel) e React.</p>
<p>A aplicação consiste em um sistema de controle e gerenciamento de usuários.</p>

<hr>

## Como Executar o Projeto ?

<p>Antes de começar certifique-se de ter um ambiente preparado com um servidor Web, PHP (>= 8.1 + compose), NodeJs (>= 16 + NPM ou outro gerenciador de pacotes) e MySQL</p>

<p>Para executar o projeto, siga os seguintes passos:</p>

<br>

* Abra o terminal dentro da pasta do projeto e execute <code>compose install</code> para instalar as dependências

<br>

* Em seguida execute o comando de instalação de dependências do Node (NPM <code>npm install</code>) 

<br>

* Agora dentro da pasta do projeto faça uam cópia do arquivo ".env.example" e renomeie para ".env", depois ajuste o arquivo com as credenciais do seu banco de dados MySQL

<br>

* Após ajustar suas credenciais e estar conectado ao seu banco de dados execute os comandos <code>php artisan migrate</code> e <code>php artisan db:seed</code>

<br>

* Por fim execute o script "dev" com seu gerenciador de pacotes, ou o comando "build" para compilar para produção (NPM <code>npm run dev</code> ou <code>npm run build</code>)

<br>

<p><strong>Observação:</strong> O sistema já possui um usuário administrador com email = "admin@admin.com" e senha = "admin"</p>

<hr>

## Imagens

<img src='imgs/login.png' alt='login' />
<img src='imgs/register.png' alt='login' />
<img src='imgs/dashboard.png' alt='login' />
<img src='imgs/users.png' alt='login' />

<hr>

## Recursos

- [x] Autenticação e Niveis de acesso
      <br>
- [x] Validações no lado do cliente e servidor
      <br>
- [x] Integração do React com o Back-end através do InertiaJs e também via API
      <br>
- [x] Front-end construído através da biblioteca Chakra UI

<hr>

## Feito com
<div>
    <img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="laravel">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react">
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql">

    
</div>

<hr>

## Autor

<a href="https://github.com/lucasMSF">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/lucasmsf" width="100px;" alt="Lucas Mathias de Souza Farias"/>
 <br />
 <sub><b>Lucas Mathias</b></sub></a> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-mathias-729a27181/)](https://www.linkedin.com/in/lucas-mathias-729a27181/)
[![Gmail Badge](https://img.shields.io/badge/-lucasmathias936@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucasmathias936@gmail.com)](mailto:lucasmathias936@gmail.com)

