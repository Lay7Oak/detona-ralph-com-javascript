# Descrição do Projeto

## Ferramentas Utilizadas
HTML, CSS e JavaScript.

## Objetivo
Praticar conceitos avançados de JavaScript.

## Origem do Projeto
Desenvolvido durante o Bootcamp Potência Tech by iFood - Desenvolvimento de Jogos.

## Implementação Original
- Pontuação baseada em acertos do personagem Ralph 
ao longo de 60 segundos (emite alerta com a pontuação).
- Jogo com autoplay (carregamento automático da página).
- Efeito sonoro indicando acertos no personagem Ralph.
- Versão disponível apenas para desktop.

## Minhas Implementações
  - Regras do Jogo
  - Botão para Ligar/Desligar efeito sonoro (dentro do campo de instruções)
  - Botão de instruções que detalha as regras do jogo:
  ````
    "✨ Instruções ✨

    👉 Você tem 60 segundos para acertar o Ralph o máximo que puder.

    👉 Regras:
    1. Se não acertar o Ralph 30 vezes nos primeiros 50 segundos: perde uma vida.
    2. Se clicar em janela vazia (sem Ralph) 3 vezes: perde uma vida.
    3. Perde o jogo ao perder todas as 3 vidas.

    👉 Venceu os 50 segundos?
    Não se distraia! Nos 10 segundos finais, você pode fazer mais pontos, porém, se clicar em janela vazia (sem Ralph) 3 vezes: perde a vida.

    👉 Aperte Start para começar e Restart para reiniciar."
````
  - Botões de Start e Restart.
  - Alteração da cor das janelas ao clicar para ajudar o jogador a identificar os cliques que contam na regra 2.
  - Responsividade para telas menores e para o modo paisagem.
  - Aumento da velocidade do personagem Ralph (velocidade fixa, sem mudança de nível implementada).
  - Alertas interativos para o usuário:

  ````
    - "Você é Master! Parabéns, ultrapassou a meta com x pontos!" ( jogador faz mais de 30 pontos)
    - "Parabéns! Você completou o jogo com sucesso" (jogador faz os  30 pontos da regra 1)
    - "Meta não atingida! Perdeu uma vida! Você fez x pontos" (quando o jogador não atinge 30 pontos em 50 segundos; neste contexto, o contador para faltando 10 segundos, o alerta é emitido, encerra a jogada e decrementa uma vida)
    - "3 Cliques em Janela Vazia! Perdeu uma vida! Você fez x pontos" (conforme regra)
    - "Game Over! Você perdeu todas as vidas." (conforme regra)
````
  - Implementação do V-Libras e atributo "title" (texto informativo ao passar o mouse), para acessibilidade

