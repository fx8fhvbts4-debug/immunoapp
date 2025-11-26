# Imunologia App — Instruções de execução

Este pequeno projeto é uma aplicação front-end estática que carrega `dados.js` e `app.js` para exibir conteúdos, quizzes, flashcards e mídia local.

## Notas rápidas
- Para que os imports ES Modules do Firebase funcionem corretamente e para evitar problemas com `file://` URL, sirva os arquivos via servidor HTTP local.
- Abra o site em `http://localhost:PORT/` em vez de abrir `index.html` diretamente no navegador.

## Servir localmente (opções simples)
- Com Python 3 (recomendado se já estiver instalado):

```bash
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

- Com `http-server` (Node.js):

```bash
# instalar se necessário
npm install -g http-server
# executar
http-server -p 8000
```
Acesse: `http://localhost:8000`

## Testes rápidos após iniciar o servidor
- Abra `http://localhost:8000` no navegador.
- Clique em um assunto na tela inicial. Verifique que:
  - O botão de áudio aparece apenas quando o assunto tem `midia.audio`.
  - O botão de vídeo aparece apenas quando o assunto tem `midia.video`.
  - Se um quiz estiver vazio, uma mensagem de alerta será aparecer ao tentar iniciá-lo (corrigido em `app.js`).

## Mudanças aplicadas
- `app.js`: validações adicionadas para evitar erros quando `midia`/`mindmap` são indefinidos e para impedir iniciar quizzes vazios.
- `dados - cópia.js` foi renomeado para `dados - copia.js.bak` (backup) para evitar carregamento acidental de um segundo `BANCO_DADOS`.

## Como reverter a renomeação
Se quiser restaurar o arquivo original:

```bash
mv "dados - copia.js.bak" "dados - cópia.js"
```

## Aviso sobre Firebase
- As chamadas ao Firebase usam ES modules importados por CDN no `index.html`. Para que funcionem localmente:
  - Sirva via HTTP (não `file://`).
  - Se direcionar para um projeto Firebase diferente, atualize `firebaseConfig` em `index.html`.

---
Se quiser, posso:
- remover permanentemente o backup (`dados - copia.js.bak`) ou movê-lo para uma pasta `backup/`;
- varrer `dados.js` e preencher quiz vazios com placeholders ou mensagens no UI;
- rodar uma checagem simples de lint (se quiser que eu adicione ESLint config).
