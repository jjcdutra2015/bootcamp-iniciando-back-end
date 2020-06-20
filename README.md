# Recuperar senha

**(RF)Requisitos Funcionais**

- O usuário deve poder recuperar sua senha enviando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**(RNF)Requisitos não funcionais**

- Utilizar Mailtrap para envio de e-mail no ambiente de dev;
- Utilizar Amazon SES para envio de e-mail em produção;
- O envio de e-mail deve acontecer em segundo plano (Background job);

**(RN)Regra de negócio**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a senha;

# Atualização do perfil

**(RF) Requisitos funcionais**

- O usuário deve poder atualizar nome, e-mail e senha;

**(RNF) Requisitos não funcionais**

**(RN) Regra de negócio**

- O usuário não pode atualizar seu e-mail para um e-mail já utilizado;
- O usuário deve informar a senha antiga para atualizar sua senha;
- O usuário precisa confirmar a nova senha para atualizar sua senha;


# Painel do prestador

**(RF) Requisitos funcionais**

- O usuário deve poder listar seus agendamentos diários;
- O prestador deve receber notificações sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**(RNF) Requisitos não funcionais**

- Os agendamentos do prestador devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser armazenadas em tempo-real no Socket.io;

**(RN) Regras de negócio**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**(RF) Requisitos funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias do mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponívels em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**(RNF) Requisitos não funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**(RN) Regras de negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h e 17h (Primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar um um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

