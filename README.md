🎬 Movie Search App

A simple and responsive React.js Movie Search Application built using the OMDb API
. Users can search for movies or series, view posters, and see detailed information like genre, actors, and ratings.

🚀 Features
🔍 Search movies or series by title
🖼️ Display posters, year, and type
📄 View detailed movie info on a separate page
🎨 Responsive UI using Bootstrap 5
⚡ Built with React Hooks and Axios


🛠️ Tech Stack
Frontend: React.js, Bootstrap
API: OMDb API
Libraries: Axios, React Router DOM


⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app

2️⃣ Install Dependencies
npm install

3️⃣ Start the App
npm start

Then open 👉 http://localhost:3000


🔑 API Key Setup
Get a free key from OMDb API
Replace in your code:

// For search
`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${searchWord}`

// For details
`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${imdbID}`


🧩 Folder Structure
src/
 ├── App.js             # Search movies
 ├── ViewDetails.js     # Movie details page
 ├── App.css
 ├── ViewDetails.css
 └── index.js


🖥️ How It Works
--------------------------------
Enter a movie/series name and click Search
View list of results with posters
Click on a title to open detailed info in a new tab

📦 Dependencies
Package	Use
react	Frontend framework
axios	API requests
bootstrap	Styling
react-router-dom	Routing
🧠 Learnings

Making API calls using Axios
Using useState and useEffect hooks
Handling dynamic routes in React Router
Responsive Bootstrap design
🏁 Future Enhancements
Add pagination
Add loading spinner
Add dark/light theme toggle


👨‍💻 Author
Swarup Kumar
💻 https://github.com/SwarupKumarTech

📧 swarupspacetech@gmail.com