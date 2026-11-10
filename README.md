# RubenAbrahamse.github.io
# Portfolio Website Backend (.NET 10 Web API)

Backend API voor een persoonlijk portfolio, gebouwd in het kader van WPFW Opdracht 3. De API ondersteunt volledige CRUD-functionaliteit voor zowel **Projecten** als **Blogposts** en maakt gebruik van een gelaagde architectuur met Entity Framework Core en SQL Server.

---

## 🛠️ Technische Specificaties & Keuzes

* **Framework:** .NET 10 (ASP.NET Core Web API)
* **Architectuur:** Gelaagde structuur (Layered Architecture):
  * **Controllers:** Vangen HTTP-requests op en sturen resultaten terug (`ProjectsController`, `BlogpostsController`).
  * **Services:** Bevatten de bedrijfslogica en DTO-mapping (`ProjectService`, `BlogpostService`).
  * **Data (DbContext):** `PortfolioDbContext` voor de communicatie met de database via EF Core.
  * **DTO's:** Scheiden de API-contracten van de database-entiteiten om *over-posting* te voorkomen.
* **Database:** Microsoft SQL Server
* **Database Initialisatie:** Gekozen voor `EnsureCreated()` i.p.v. migraties, zodat de database automatisch en betrouwbaar wordt aangemaakt bij de eerste opstart van de applicatie.
* **Documentatie:** Swagger UI (`Swashbuckle.AspNetCore`)

---

## 📂 Projectstructuur

```text
PortfolioApi/
├── Controllers/       # API endpoints (Projects & Blogposts)
├── Data/              # EF Core DbContext
├── DTOs/              # Data Transfer Objects (Create, Update, Response)
├── Models/            # Database entiteiten (Project & Blogpost)
├── Services/          # Bedrijfslogica en DTO mapping
├── Program.cs         # Dependency Injection en middleware configuratie
└── appsettings.json   # Configuratie (inclusief SQL Server ConnectionString)
⚙️ Configuratie & Vereisten
Zorg dat je de .NET 10 SDK en SQL Server (LocalDB) hebt geïnstalleerd[cite: 2].

Controleer of de connection string in appsettings.json correct is ingesteld op jouw lokale SQL Server instantie:

JSON
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=PortfolioDb;Trusted_Connection=True;MultipleActiveResultSets=true"
}
🚀 Startinstructies
Open je terminal en navigeer naar de projectmap (PortfolioApi).

Herstel de NuGet-pakketten en bouw het project:

Bash
dotnet restore
dotnet build
Start de applicatie met het volgende commando[cite: 2]:

Bash
dotnet run
Open je browser en ga naar http://localhost:5000 (of de poort die in je terminal wordt weergegeven). De Swagger UI opent direct op de hoofdpagina, waar je alle endpoints kunt testen.

📌 Endpoints Overzicht
Projecten: /api/projects (GET, GET /{id}, POST, PUT /{id}, DELETE /{id})[cite: 2]

Blogposts: /api/blogposts (GET, GET /{id}, POST, PUT /{id}, DELETE /{id})[cite: 2]