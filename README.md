# Plataforma de Controle de Usuários 🔐

## Sobre

Este projeto tem como objetivo mostrar/exercitar meus conhecimentos em PHP (Laravel) e React. A aplicação consiste em um sistema de controle e gerenciamento de usuários.

## Como Executar o Projeto

Antes de começar, certifique-se de ter um ambiente preparado com um servidor Web, PHP (>= 8.1 + compose), NodeJs (>= 16 + NPM ou outro gerenciador de pacotes) e MySQL.

Para executar o projeto, siga os seguintes passos:

1. Abra o terminal dentro da pasta do projeto e execute `compose install` para instalar as dependências.

2. Em seguida, execute o comando de instalação de dependências do Node (NPM `npm install`).

3. Agora, dentro da pasta do projeto, faça uma cópia do arquivo ".env.example" e renomeie para ".env", depois ajuste o arquivo com as credenciais do seu banco de dados MySQL.

4. Após ajustar suas credenciais e estar conectado ao seu banco de dados, execute os comandos `php artisan migrate` e `php artisan db:seed`.

5. Por fim, execute o script "dev" com seu gerenciador de pacotes, ou o comando "build" para compilar para produção (NPM `npm run dev` ou `npm run build`).

Observação: O sistema já possui um usuário administrador com email = "admin@admin.com" e senha = "admin".

## Imagens

![Login](imgs/login.png)
![Registro](imgs/register.png)
![Painel](imgs/dashboard.png)
![Usuários](imgs/users.png)

## Recursos

- [x] Autenticação e Níveis de Acesso
- [x] Validações no Lado do Cliente e Servidor
- [x] Integração do React com o Back-end através do InertiaJs e também via API
- [x] Front-end construído com a biblioteca Chakra UI

## Feito com

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Autor

**Lucas Mathias**

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-mathias-729a27181/)](https://www.linkedin.com/in/lucas-mathias-729a27181/)
[![Gmail Badge](https://img.shields.io/badge/-lucasmathias936@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucasmathias936@gmail.com)](mailto:lucasmathias936@gmail.com)
