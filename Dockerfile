# Escolher a imagem base
FROM node:18

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta
EXPOSE 3001

# Comando para rodar a aplicação
CMD ["npm", "start"]
