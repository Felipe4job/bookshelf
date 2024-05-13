# Estante Virtual:

## Objetivo

Criar uma estante virtual para auxiliar no gerenciamento de leituras, com funcionalidades para:

- Registrar livros lidos, adicionar personagens e comentários;
- Cadastrar livros desejados para leitura futura;
- Obter análises de gostos e hábitos de leitura através dos dados registrados.

## O que já foi feito

### Desenvolvimento da base:

- Criação do projeto utilizando Next.js 14, Tailwind CSS e TypeScript.
- Configuração do ESLint e Tailwind com paleta de cores e layout responsivo.

### Estrutura da aplicação:

- Criação das páginas no App Route, dividindo entre públicas e privadas (com autenticação).
- Implementação de componentes auxiliares (inputs, formulários, menu).
- Utilização do React Hook Form para gerenciar formulários.
- Criação dos Contexts para gerenciamento de estado.
- Aplicação de layout responsivo com Mobile First.

### Dados e integrações:

- Criação da aplicação Fetch para gerenciar requisições.
- Desenvolvimento de todos os requests com tipagem.
- Início da configuração do API Route do Next.js para requisições Server Side.
- Criação das rotas no modelo API Route através de pastas e arquivos route.ts

## O que falta fazer

- Finalização da modelagem de dados:
    - Refinar a modelagem de Collections, Fields e Consultas no banco de dados.
- Integração com MongoDB:
    - Adicionar e configurar o MongoDB no projeto.
    - Implementar as primeiras requisições para interagir com o banco de dados.
    - Integração com MongoDB para unificar front-end e back-end em um único projeto.
- Autenticação:
    - Implementar a gestão de autenticação do usuário com Next Auth, permitindo login por e-mail, Google ou Apple.
- Requisições Server Side:
    - Utilizar o Next.js 14 para executar as requisições em Server Side, gerenciando dados no servidor e no cliente.

## Recursos Adicionais

- Implementar a funcionalidade de IA Generative para auxiliar na criação de personagens.
- Desenvolver análises de dados para fornecer informações sobre hábitos, gostos e preferências de leitura.

## Observações

- Este projeto está em constante desenvolvimento, com novas funcionalidades e aprimoramentos sendo adicionados gradativamente.
- A documentação detalhada das APIs e funcionalidades será disponibilizada à medida que o projeto avançar.

## Tecnologias

- Next.js 14
- Tailwind CSS
- TypeScript
- React Hook Form
- ESLint
- MongoDB