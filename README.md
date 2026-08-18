# Conecta Santo Ângelo

Portal e materiais de apoio para oficinas de inclusão digital com jovens e adultos
em comunidade carente de **Santo Ângelo – RS**.

Projeto desenvolvido para a disciplina **Atividade Extensionista II: Tecnologia
Aplicada à Inclusão Digital – Projeto**, do curso Superior de Tecnologia em
Análise e Desenvolvimento de Sistemas.

**Autor:** Jackson Ramos — RU 5216686

---

## O problema

Parte da população da comunidade tem celular e acesso à internet, mas usa a rede
quase só para mensagens e vídeos. Serviços que resolveriam problemas concretos do
dia a dia — agendar consulta no SUS, consultar CPF, estudar de graça — ficam sem
uso por dois motivos: a pessoa não sabe que existem, ou não sabe distinguir o
site oficial de uma página de golpe.

O acesso existe. O que falta é caminho e confiança.

## A solução

Um portal leve, pensado para celular e para quem tem pouca familiaridade digital,
que agrupa os serviços por **necessidade do dia a dia** em vez de por categoria
técnica. Ele é usado ao vivo durante a oficina e fica salvo no celular do
participante depois, junto com uma cartilha impressa de navegação segura.

### Decisões de projeto

| Decisão | Motivo |
|---|---|
| HTML e CSS puros, sem framework | Abre rápido em celular antigo e em conexão fraca |
| Zero dependências externas | Funciona mesmo com a rede instável do local |
| Fonte de 18px, alvos de toque de 48px+ | Público com baixa acuidade visual e pouca prática de toque |
| Categorias por necessidade, não por tipo de serviço | "Resolver com o governo" comunica mais que "e-Gov" |
| Alto contraste e suporte a tema claro/escuro | Legibilidade em sala com luz variável |
| Navegação por teclado e leitor de tela | Acessibilidade como critério, não como extra |
| Cartilha em papel | O participante leva para casa e mostra para a família |

---

## Estrutura do repositório

```
.
├── index.html                       Portal principal (4 categorias)
├── assets/style.css                 Estilos do portal
├── cartilha/index.html              Cartilha de navegação segura (imprimível, A4)
├── slides/index.html                Slides da oficina (10 slides, navegação por teclado)
└── materiais/
    ├── lista-presenca.html          Lista de presença para assinatura (imprimível)
    └── declaracao-espaco.html       Declaração de realização (imprimível)
```

## Conteúdo do portal

**📚 Estudar de graça** — Khan Academy, Coursera, canais de estudo no YouTube

**🏛️ Resolver com o governo** — Gov.br, Meu SUS Digital, Receita Federal

**🧠 Exercitar a mente** — Duolingo, Racha Cuca, Lumosity

**🛡️ Navegar com segurança** — cinco regras rápidas + cartilha completa

---

## Como rodar localmente

Não precisa de build nem de servidor. Basta abrir `index.html` no navegador.

Para servir na rede local (útil para testar no celular durante a oficina):

```bash
python -m http.server 8000
```

Depois acesse `http://<ip-do-computador>:8000` pelo celular, na mesma rede.

## Publicação

O site é estático e está publicado via **GitHub Pages**, a partir da branch `main`,
pasta raiz. O arquivo `.nojekyll` impede o processamento pelo Jekyll.

---

## Como os materiais se ligam aos objetivos do projeto

| Objetivo da proposta | Onde é atendido |
|---|---|
| Capacitar no uso consciente e produtivo da internet | Oficina presencial conduzida com os slides |
| Ensinar plataformas de estudo e serviços públicos digitais | Portal, categorias "Estudar de graça" e "Resolver com o governo"; slides 4 e 5 |
| Apresentar aplicativos e jogos educativos | Portal, categoria "Exercitar a mente"; slide 6 |
| Promover navegação segura e uso responsável | Portal, categoria "Navegar com segurança"; cartilha impressa; slides 7 e 8 |

## Roteiro da oficina

Duração aproximada de 2 horas, com os participantes usando o próprio celular.

1. Abertura e apresentação — 10 min
2. Bloco 1: estudar de graça, com prática na Khan Academy — 25 min
3. Bloco 2: serviços públicos, com prática no Gov.br — 30 min
4. Bloco 3: aplicativos educativos, com prática no Duolingo — 20 min
5. Bloco 4: navegação segura, com a dinâmica "é golpe ou não é?" — 25 min
6. Encerramento: salvar o portal nos favoritos e entregar a cartilha — 10 min

---

## Antes de aplicar — conferir

- [ ] Testar todos os links do portal (serviços do governo mudam de endereço com frequência)
- [ ] Publicar o GitHub Pages e testar o endereço em um celular real
- [ ] Imprimir a cartilha, a lista de presença e duas vias da declaração
- [ ] Confirmar espaço, data e horário com o responsável
- [ ] Combinar com alguém para fotografar durante a oficina
- [ ] Se o espaço for público, obter a autorização formal **antes** da data

## Licença

Material livre para cópia, uso e adaptação por outras iniciativas de inclusão
digital. Os serviços citados pertencem a seus respectivos responsáveis; este
projeto apenas organiza os caminhos de acesso.
