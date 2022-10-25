
# ignite-trilha-nodejs-Chapter01-TypeScript

## Criando o server.ts

Como estamos trabalhando com TypeScript agora não utilizamos mais .js e sim .ts.

### Instalando o @types/express

```bash

npm i --save-dev @types/express

```

### Instalando o TypeScript

```bash

npm i --save-dev typescript

```

### Iniciando o TypeScript

```bash

npx tsc --init

```

### Aplicando as conversões de código para o TypeScript

Vamos criar uma pasta /dist na raiz do nosso projeto e vamos configurar o arquivo tsconfig.json para que o TypeScript converta o código para a pasta /dist.

```json

{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
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
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}/src/server.ts",
        "preLaunchTask": "tsc: build - tsconfig.json",
        "outFiles": ["${workspaceFolder}/out/**/*.js"]
      }
    ]
}
```

### Observação:

- para debugar o TypeScript, precisa altear o arquivo tsconfig.json da seguinte forma:

```json

{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "outDir": "out",                                     /* Specify an output folder for all emitted files. */
    "sourceMap": true,                                   /* Create source map files for emitted JavaScript files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```

Agora o debugger do VSCode vai funcionar corretamente.
