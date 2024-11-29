# Agenda DevFest App

Este projeto foi desenvolvido para a palestra "Angular + Firebase: Construindo um Web App sem Servidor" ministrada no DevFest Rio Verde 2024.

## Tecnologias utilizadas

 - [Angular v17](https://angular.dev/)
 - Angular CLI
 - [Angular Material](https://material.angular.io/)
 - [Firebase](https://firebase.google.com/)
    - Firebase CLI
    - Firestore
    - Hosting
 - [AngularFire](https://github.com/angular/angularfire)


## Teste você mesmo 👇

Só tem um jeito de aprender a programar: **PROGRAMANDO** 👨‍💻

### Clone o repositório

Faça o clone do projeto para sua máquina:
```
git clone https://github.com/dercilima/agenda-devfest-app
```

### Instale as dependências

Instale as dependências do projeto:
```
npm i
```

### Firebase CLI

Nesse passo, iremos instalar o Firebase CLI com o seguinte comando:
```
npm i -g firebase-tools
```

### AngularFire

Adicione o AngularFire ao projeto:
```
ng add @angular/fire
```

Algumas perguntas serão feitas e você deve responder:

- **The package @angular/fire@17.1.0 will be installed and executed. Would you like to proceed?** Responda com Y pra confirmar a instalação da dependência no projeto
- **What features would you like to setup?** Firestore
- **Which Firebase account would you like to use?** Faça login ou selecione o e-mail que você possui uma conta cadastrada no Firebase (se não tiver, basta criar uma nova conta)
- **Please select a project:** Selecione um projeto (caso já tenha criado um no console do Firebase) ou escolha [CREATE NEW PROJECT] para criar um projeto novo
- **Please select an app:** Selecione um aplicativo (caso já tenha criado um no console do Firebase) ou selecione [CREATE NEW APP] para criar um aplicativo novo

Após finalizado a configuração você deverá visualizar no console a seguinte mensagem:
```
✔ Downloading configuration data of your Firebase WEB app
UPDATE .gitignore (602 bytes)
UPDATE src/app/app.module.ts (1734 bytes)
```

### Habilite o Firestore

Acesse o [Console do Firebase](https://console.firebase.google.com) e siga os seguintes passos:
- Escolha o projeto
- No menu lateral esquerdo acesse: Build >> Firestore Database
- Create database
- Selecione o location como `southamerica-east1(São Paulo)`
- No próximo step, selecione: `Start in test mode`
- Create

### Execute o projeto

Execute o projeto localmente:
```
npm start
```

**PRONTO! Agora você já pode testar nosso CRUD.**

## Deploy • Hosting

Execute o comando abaixo para construir o projeto:
```
ng build
```

Os artefatos serão armazenados no diretório `dist/{nome-do-seu-projeto}`.

### Inicialize o Firebase

Antes de fazer o deploy, precisamos configurar nosso projeto com o Firebase Hosting. Para isso, execute o seguinte comando no terminal:

```
firebase init
```

Reponda as perguntas:
- **Which Firebase features do you want to set up for this directory?** Responda: `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
- **What do you want to use as your public directory?** Responda: `dist/{nome-do-seu-projeto}/browser`
- **Configure as a single-page app (rewrite all urls to /index.html)?** Responda: `Y`
- **Set up automatic builds and deploys with GitHub?** Responda: `N`
- **File `dist/{nome-do-seu-projeto}/browser/index.html` already exists. Overwrite?** Responda: `N`

Pronto! Projeto configurado. Repare que alguns arquivos foram criados no seu projeto: `firebase.json` e `.firebaserc`.

### Faça o Deploy

Agora sim, execute o comando abaixo no seu terminal e veja a magia acontecer:

```
firebase deploy --only hosting
```

Após finalizado o deploy, no final do console irá aparecer algo assim:

`Hosting URL: https://devfest-xpto.web.app`

Pronto! Agora sua aplicação está online para o mundo 🌏

## Continue aprendendo 👇

Se você quer continuar aprendendo mais coisas legais desse universo da programação é só [acompanhar meu trabalho nas redes sociais e em meus treinamentos](https://dercilima.github.io/my-linktree-profile).

Forte Abraço! </br>
**Derci Santos - Dev**
