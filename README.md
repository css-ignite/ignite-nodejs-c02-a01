
# ignite-trilha-nodejs-Chapter01-TypeScript

## Criando o server.ts

Como estamos trabalhando com TypeScript agora não utilizamos mais .js e sim .ts.

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

Agora vamos iniciar o TypeScript para que ele gere o arquivo de configuração tsconfig.json.

```bash

npx tsc --init

```

Agora temos criado no nosso projeto o arquivo tsconfig.json com as configurações padrões do TypeScript.

### Aplicando as conversões de código para o TypeScript

Vamos criar uma pasta /dist na raiz do nosso projeto e vamos configurar o arquivo tsconfig.json para que o TypeScript converta o código para a pasta /dist.

```json

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

```

Agora vamos execuytar o comando `npx tsc` para que o TypeScript converta o código para a pasta /dist.

```bash

npx tsc

```

Após este passo vamos modificar o launch.json para que o VSCode execute o código convertido pelo TypeScript.

Desta forma, a cada debuge ele vai executar o comando `npx tsc` e depois executar o código convertido.

```json

{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}/src/server.ts",
        "preLaunchTask": "tsc: build - tsconfig.json",
        "outFiles": ["${workspaceFolder}/dist/**/*.js"]
      }
    ]
}

```

### Observação

- para debugar o TypeScript, precisa altear o arquivo tsconfig.json da seguinte forma:

```json

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "sourceMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

```

Agora o debugger do VSCode vai funcionar corretamente.

Não podemos esquecer de configurar o package.json para que ele também gere os .js ao executar o servidor via linha de comando.

```json

{
  "dependencies": {
    "express": "^4.18.2"
  },
  "scripts": {
    "dev": "tsc && node dist/server.js"
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
