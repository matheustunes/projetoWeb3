# Instruções de Instalação e Uso - GymChain Frontend

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior)
- Angular CLI (será instalado automaticamente)

## Instalação

1. **Extrair o projeto**
   ```bash
   # Se recebeu um arquivo compactado, extraia-o
   unzip gymchain-frontend.zip
   cd gymchain-frontend
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Configurar a API**
   - Edite o arquivo `src/app/config/api.config.ts`
   - Altere a `baseUrl` para o endereço da sua API GymChain:
   ```typescript
   export const API_CONFIG = {
     baseUrl: 'http://localhost:8080', // Altere para sua API
     // ...
   };
   ```

## Executar a Aplicação

### Modo de Desenvolvimento
```bash
ng serve
```
A aplicação estará disponível em `http://localhost:4200`

### Build para Produção
```bash
ng build --prod
```
Os arquivos de produção estarão na pasta `dist/`

## Funcionalidades Implementadas

### ✅ Autenticação
- Tela de login com validação
- Autenticação JWT
- Guard de rotas protegidas
- Logout automático

### ✅ Dashboard
- Estatísticas de treinos
- Navegação rápida
- Interface responsiva

### ✅ Serviços da API
- AuthService - Autenticação
- UserService - Gerenciamento de usuários
- ExerciseService - Biblioteca de exercícios
- WorkoutService - Treinos e exercícios

### ✅ Interface
- Design moderno com Angular Material
- Tema Azure/Blue
- Responsivo (mobile e desktop)
- Animações suaves

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── login/          # Tela de login
│   │   └── dashboard/      # Dashboard principal
│   ├── services/           # Serviços da API
│   ├── guards/            # Guards de autenticação
│   ├── config/            # Configurações
│   └── app.routes.ts      # Rotas da aplicação
├── styles.scss            # Estilos globais
└── index.html            # Página principal
```

## Usuários de Teste

Conforme a documentação da API, você pode usar:

- **Email**: admin@ifsp.edu.br
- **Email**: fernandoduarte@ifsp.edu.br
- **Email**: julianasilva@ifsp.edu.br

*Nota: As senhas dependem da configuração da sua API*

## Próximos Passos

Para expandir a aplicação, você pode:

1. **Adicionar mais componentes**:
   - Lista de exercícios
   - Criação de treinos
   - Perfil do usuário

2. **Melhorar a interface**:
   - Gráficos de progresso
   - Calendário de treinos
   - Notificações

3. **Funcionalidades avançadas**:
   - Relatórios
   - Exportação de dados
   - Integração com wearables

## Comandos Úteis

```bash
# Gerar novo componente
ng generate component nome-do-componente

# Gerar novo serviço
ng generate service nome-do-servico

# Executar testes
ng test

# Verificar código
ng lint

# Atualizar dependências
npm update
```

## Suporte

Este projeto foi desenvolvido baseado na documentação da API GymChain fornecida. Para dúvidas sobre a implementação, consulte:

- Código-fonte dos componentes
- Documentação do Angular: https://angular.dev
- Documentação do Angular Material: https://material.angular.io

## Tecnologias Utilizadas

- **Angular 18** - Framework principal
- **Angular Material** - Componentes de UI
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS** - Programação reativa
- **JWT** - Autenticação

