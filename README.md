# Hur jag byggde och strukturerade min app

* Har skapat min strukturering genom att:
    * Skapat en client-mapp för frontend och en api-mapp för backend.
    * Installerat olika typer av paket(nedb, cors, express, nodemon, path)
    * Har en .dockerignore där jag lagt in stora filer såsom node_modules
    * Dockerfile-fil på både frontend- o backend
    * Har skapat en .js fil på api sidan där jag gör mina get, post, req. 
    * dist mapp skapades när jag körde kommandot npm run build.
    * docker-compose.yml lades till vilket låter mig deploya, kombinera och konfigurera olika typer av docker-containers samtidigt, för min frontend och backend.

# Hur jag kör igång både frontend och backend(api och client) 

 * i terminalen kör jag kommandot *docker-compose up --build* vilket bygger, skapar och startar en container för både front- o backend.

# Vilket molntjänst jag har deploya till, samt vilka kommandon jag körde:

* Heroku - Hur jag deployade min applikation
 * heroku container:login('heroku login' ifall du inte är inloggad på heroku) - du loggar in på heroku med din docker-container
 * heroku create . -den lokala applikationen skickas(pushas) in i heroku applikationen
 * docker tag registry.heroku.com//web - **taggar imagen innan den pushas till heroku
 * docker push registry.heroku.com//web* - pushar imagen till heroku
 * heroku container:release web - släpper imagen till applikationen
 * heroku open - applikationen öppnas i webbläsaren


