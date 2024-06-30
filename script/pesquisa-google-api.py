import time
import requests
import csv

# Função para pesquisar no Google API
def pesquisar_google_api(query_pesquisa):
    url_da_api = "https://www.googleapis.com/customsearch/v1"
    parametros = {
        "key": "",
        "cx": "",
        "q": query_pesquisa
    }
    
    try:
        response = requests.get(url_da_api, params=parametros)
        response.raise_for_status()  # Força uma exceção se o status não for 200
        resultados = response.json().get("items", [])
        if resultados:
            titulo = resultados[0].get("title", "Sem título")
            link = resultados[0].get("link", "Sem link")
        else:
            titulo = "Nenhum resultado encontrado."
            link = ""
    except Exception as e:
        titulo = f"Erro: {str(e)}"
        link = ""
    return titulo, link

# Função para salvar os resultados em um arquivo CSV
def salvar_em_csv(resultados, nome_arquivo="resultados.csv"):
    with open(nome_arquivo, mode='w', newline='', encoding='utf-8') as arquivo_csv:
        escritor_csv = csv.writer(arquivo_csv)
        escritor_csv.writerow(["Título", "Link"])  # Adiciona cabeçalho
        for titulo, link in resultados:
            escritor_csv.writerow([titulo, link])
    print(f"Arquivo '{nome_arquivo}' salvo com sucesso.")

# Execução principal
if __name__ == "__main__":
    resultados = []

    for i in range(1, 101):
        query_pesquisa = f"examtopics ai-900 topic 1 question {i}"
        titulo, link = pesquisar_google_api(query_pesquisa)
        resultados.append((titulo, link))
        print(f"Processado: questão {i}.")
        time.sleep(1)  # Delay de 1 segundo para evitar erro 429

    salvar_em_csv(resultados)