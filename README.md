# GymChain Frontend

Frontend Angular para a API GymChain - Sistema de gerenciamento de treinos de musculação.

## Funcionalidades

- **Autenticação JWT**: Login seguro com tokens JWT
- **Dashboard**: Visão geral dos treinos e estatísticas
- **Gerenciamento de Usuários**: CRUD completo de usuários
- **Biblioteca de Exercícios**: Catálogo de exercícios por grupo muscular
- **Treinos**: Criação e gerenciamento de treinos personalizados
- **Interface Responsiva**: Design moderno com Angular Material

## Tecnologias Utilizadas

- Angular 18
- Angular Material
- TypeScript
- SCSS
- RxJS
- JWT para autenticação

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── login/          # Componente de login
│   │   └── dashboard/      # Dashboard principal
│   ├── services/
│   │   ├── auth.ts         # Serviço de autenticação
│   │   ├── user.ts         # Serviço de usuários
│   │   ├── exercise.ts     # Serviço de exercícios
│   │   └── workout.ts      # Serviço de treinos
│   ├── guards/
│   │   └── auth.guard.ts   # Guard de autenticação
│   ├── config/
│   │   └── api.config.ts   # Configurações da API
│   └── app.routes.ts       # Configuração de rotas
```

## API Endpoints

A aplicação consome os seguintes endpoints da API GymChain:

- `POST /auth/login` - Autenticação
- `GET /users` - Listar usuários
- `POST /users` - Criar usuário
- `PUT /users/{id}` - Atualizar usuário
- `DELETE /users/{id}` - Excluir usuário
- `GET /exercises` - Listar exercícios
- `POST /exercises` - Criar exercício
- `GET /workouts` - Listar treinos
- `POST /workouts` - Criar treino
- `GET /workout-exercises` - Listar exercícios do treino

## Configuração

1. Configure a URL da API no arquivo `src/app/config/api.config.ts`:
```typescript
export const API_CONFIG = {
  baseUrl: 'http://localhost:8080', // URL da sua API
  // ...
};
```

## Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
ng serve

# Build para produção
ng build
```

## Usuários de Teste

Conforme a documentação da API, existem os seguintes usuários pré-cadastrados:

- **Admin**: admin@ifsp.edu.br
- **Fernando**: fernandoduarte@ifsp.edu.br  
- **Juliana**: julianasilva@ifsp.edu.br

Senha padrão para todos: conforme configurado na API (hash bcrypt)

## Funcionalidades Implementadas

### Autenticação
- Login com email e senha
- Armazenamento seguro do token JWT
- Logout automático quando token expira
- Guard de rota para páginas protegidas

### Dashboard
- Estatísticas de treinos
- Exercícios disponíveis
- HP (Health Points) ganhos
- Treinos recentes
- Navegação rápida

### Interface
- Design responsivo
- Tema Azure/Blue do Angular Material
- Animações suaves
- Feedback visual para ações do usuário

## Próximas Funcionalidades

- Componentes para gerenciamento completo de exercícios
- Interface para criação de treinos
- Relatórios e gráficos de progresso
- Perfil do usuário
- Configurações da aplicação

## Contribuição

Este projeto foi desenvolvido baseado na documentação da API GymChain fornecida.

