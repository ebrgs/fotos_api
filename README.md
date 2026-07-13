# Fotos API 📸

Uma poderosa API construída em NestJS projetada para upload, gerenciamento de mídias e fotos, com integração em nuvem.

## 🚀 Tecnologias Utilizadas

- **Framework:** NestJS (Node.js/TypeScript).
- **Banco de Dados:** PostgreSQL com TypeORM.
- **Armazenamento de Arquivos/Nuvem:** Cloudinary.
- **Autenticação:** Passport JWT e criptografia de senhas com bcrypt.
- **Validações:** Class-Validator e Class-Transformer.
- **Testes:** Jest.

## ✨ Funcionalidades

- Arquitetura em camadas e modular seguindo os padrões do ecossistema NestJS.
- Upload otimizado de imagens e armazenamento externo via **Cloudinary**.
- Rotas protegidas (Guards) utilizando autenticação JWT.
- Fluxo completo de armazenamento e resgate de referências visuais em banco relacional.

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/ebrgs/fotos_api.git
   ```
2. Instale as dependências (preferencialmente utilizando yarn ou npm):
   ```bash
   yarn install
   # ou npm install
   ```
3. Crie e preencha um arquivo `.env` na raiz, baseando-se no `.env.exemple`:
   - Inclua suas credenciais do **PostgreSQL**.
   - Inclua suas chaves de acesso da API do **Cloudinary**.
   - Defina seu `JWT_SECRET`.
4. Inicie o projeto em modo de desenvolvimento:
   ```bash
   yarn start:dev
   # ou npm run start:dev
   ```

## 📄 Licença
Desenvolvido por Elias (ebrgs).