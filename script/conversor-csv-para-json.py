import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Lista para armazenar os dados convertidos
    data = []
    
    # Abrir o arquivo CSV para leitura
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        # Criar um objeto reader
        csv_reader = csv.reader(csv_file)
        
        # Converter cada linha do CSV em um dicionário com as chaves "title" e "link"
        for row in csv_reader:
            # Supondo que a primeira coluna seja o título e a segunda o link
            if len(row) >= 2:  # Verifica se a linha tem pelo menos dois elementos
                data.append({"title": row[0], "link": row[1]})
    
    # Abrir o arquivo JSON para escrita
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        # Escrever os dados no arquivo JSON, formatando para uma leitura mais fácil
        json.dump(data, json_file, indent=4)

# Exemplo de uso
csv_file_path = 'C:/Users/roodn/Downloads/Base.csv'
json_file_path = 'C:/Users/roodn/Downloads/novo_arquivo.json'
csv_to_json(csv_file_path, json_file_path)