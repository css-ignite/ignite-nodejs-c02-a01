
# Ignite trilha nodejs Chapter 02 - TypeScript

## Criando o server.ts

Como estamos trabalhando com TypeScript agora não utilizamos mais `.js` e sim `.ts`.

### Instalando o @types/express

Este package é necessário para que o TypeScript reconheça os tipos do express.

O node não entende TypeScript, então precisamos compilar o código para que ele entenda.

Este package possui os tipos do express, então o TypeScript vai entender o que o express faz.

```bash

## instalando o @types/express no projeto
npm i --save-dev @types/express

```

### Instalando o TypeScript

TypeScript é uma linguagem para JavaScript em escala de aplicativo. O TypeScript adiciona tipos opcionais ao JavaScript que suportam ferramentas para aplicativos JavaScript em larga escala para qualquer navegador, para qualquer host, em qualquer sistema operacional. O TypeScript compila para JavaScript legível e baseado em padrões.

O TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. O TypeScript é mantido pela Microsoft, mas é um projeto de código aberto.

Por padrão o TypeScript não está disponível no node, então precisamos instalar o TypeScript no projeto.

```bash

## instalando o typescript no projeto
npm i --save-dev typescript

```

### Iniciando o TypeScript

É necessário criar um arquivo de configuração do TypeScript para que ele entenda como deve compilar o código.

Agora vamos iniciar o TypeScript para que ele gere o arquivo de configuração `tsconfig.json`.

```bash

npx tsc --init

```

Agora temos criado no nosso projeto o arquivo `tsconfig.json` com as configurações padrões do TypeScript.

### Aplicando as conversões de código para o TypeScript

Vamos criar uma pasta `/dist` na raiz do nosso projeto e vamos configurar o arquivo `tsconfig.json` para que o TypeScript converta o código para a pasta `/dist`.

Obs: Eu estou criando uma cópia de segurança do `tsconfig.json` e mantendo os comentários para que eu possa entender o que cada configuração faz e estou criando um arquivo simplificado somente com o que utilizarei.

```json

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

```

Agora vamos executar o comando `npx tsc` para que o TypeScript converta o código para a pasta `/dist`.

```bash

npx tsc

```

Agora é só apontar o arquivo `.js` gerado para o script de start do `package.json`.

```json

{
  "dependencies": {
    "express": "^4.18.2"
  },
  "scripts": {
    "dev": "node dist/server.js"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@typescript-eslint/eslint-plugin": "^5.41.0",
    "eslint": "^8.26.0",
    "eslint-config-standard-with-typescript": "^23.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.3.0",
    "eslint-plugin-promise": "^6.1.1",
    "typescript": "^4.8.4"
  }
}


```

Para executar e só rodar o comando

```bash

npm run dev

```

## Configuranod o debugger para rodar com o Nodemon e o TypeScript

Instalando o Nodemon para possibilitar o reload do server ao alterar o código.

O nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo node quando os arquivos de origem são alterados.

```bash

npm install nodemon

```

Instalando o ts-node para possibilitar o debug do código TypeScript.

O ts-node é um interpretador TypeScript que executa o código TypeScript diretamente, sem a necessidade de um processo de compilação.

```bash

npm install ts-node -D

```

Instalando o @types/node para possibilitar o debug do código TypeScript.

O @types/node fornece os tipos TypeScript para o Node.js.

```bash

npm install -D tslib @types/node

```

Alterando o perfil de debug do VSCode para possibilitar a utilização do TypeScript.

```json

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debugger",
            "program": "${workspaceFolder}/src/server.ts",
            "preLaunchTask": {
              "type": "typescript",
              "tsconfig": "tsconfig.json",
              "option": "watch",
            },
            "runtimeExecutable": "nodemon"
          },
    ]
}

```

Agora nosso código está pronto para ser debugado.
