# Certificações da Microsoft Azure

Este projeto tem como objetivo fornecer simulados e planos de estudo para diversas certificações da Microsoft Azure. Através deste repositório, você encontrará recursos valiosos para se preparar para os exames de certificação, incluindo questões de simulado, links para discussões e planos de estudo detalhados.

## Objetivo

O objetivo principal deste projeto é ajudar os candidatos a se prepararem de maneira eficaz para os exames de certificação da Microsoft Azure. Oferecemos simulados que replicam o formato dos exames reais, permitindo que os candidatos pratiquem e avaliem seu conhecimento antes de realizar o exame oficial.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:


### Descrição dos Diretórios e Arquivos

- **script/**: Contém scripts Python para conversão de arquivos CSV para JSON e para pesquisa na API do Google.
  - `conversor-csv-para-json.py`: Script para converter arquivos CSV em JSON.
  - `pesquisa-google-api.py`: Script para realizar pesquisas na API do Google e salvar os resultados em CSV.

- **src/**: Diretório principal contendo os recursos do projeto.
  - **css/**: Contém arquivos CSS personalizados para estilização das páginas.
    - `custom-index.css`: Estilos personalizados para a página inicial.
    - `custom-page.css`: Estilos personalizados para as páginas de simulado.
  - **data/**: Contém arquivos JSON com as questões dos simulados para cada certificação.
    - `ai-900.json`, `az-104.json`, `az-204.json`, `az-305.json`, `az-900.json`, `dp-900.json`, `ms-900.json`, `sc-900.json` e `dp-600.html`: Arquivos JSON com as questões dos simulados.
  - **img/**: Diretório para armazenar imagens utilizadas no projeto.
  - **js/**: Contém arquivos JavaScript para funcionalidades das páginas.
    - `custom-page.js`: Script para carregar e gerenciar as questões dos simulados.
    - `google-analytics.js`: Script para integração com o Google Analytics.
  - **page/**: Contém arquivos HTML para cada simulado.
    - `ai-900.html`, `az-104.html`, `az-204.html`, `az-305.html`, `az-900.html`, `dp-900.html`, `ms-900.html`, `sc-900.html` e `dp-600.html`: Páginas HTML para cada simulado.

### Funcionalidades

- **Simulados**: Páginas HTML interativas que carregam questões de simulado a partir de arquivos JSON. Os usuários podem navegar pelas questões, marcar como visitadas e acompanhar seu progresso.
- **Planos de Estudo**: Links para planos de estudo detalhados para cada certificação, disponíveis no GitHub Wiki.
- **Rastreamento de Progresso**: Utilização do Local Storage para salvar o progresso do usuário, permitindo que ele continue de onde parou.
- **Google Analytics**: Integração com o Google Analytics para rastreamento de eventos e análise de uso.

### Como Utilizar

1. Clone o repositório para o seu ambiente local:
   ```sh
   git clone https://github.com/RoodneyMoraes/certificacoes-microsoft-azure.git
2. Navegue até o diretório do projeto:
   ```sh
   cd certificacoes-microsoft-azure
3. Abra o arquivo index.html no seu navegador para acessar a página inicial do projeto.
4. Selecione a certificação desejada e clique no botão "Fazer Simulado" para iniciar o simulado.

### Contribuição

1. Fork o repositório.
2. Crie uma branch para sua feature ou correção:
   ```sh
   git checkout -b minha-feature
3. Faça commit das suas alterações:
   ```sh
   git commit -m 'Adiciona minha feature'
4. Envie para o branch principal:
   ```sh
   git push origin minha-feature
5. Abra um Pull Request.

### Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esperamos que este projeto seja útil na sua jornada de certificação Microsoft Azure. Boa sorte nos seus estudos e exames!

