import Home from "./Pages/Home/Home";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Author from "./Pages/Author/Author";
import Books from "./Pages/Books/Books";
import CreateAuthor from "./Pages/CreateAuthor/CreateAuthor";
import CreateBook from "./Pages/CreateBook/CreateBook";
import EditBook from "./Pages/EditBook/EditBook";
import EditAuthor from "./Pages/EditAuthor/EditAuthor";
function App() {
  const [id, setId] = useState(0);
  const [AuthorId, setAuthorId] = useState(0);
  return (
    <div className="app">
      <BrowserRouter>
        <div className="d-flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books setId={setId} />} />
              <Route
                path="/author"
                element={<Author setAuthorId={setAuthorId} />}
              />
              <Route path="/createbook" element={<CreateBook />} />
              <Route path="/createauthor" element={<CreateAuthor />} />
              <Route path="/editbook/:id" element={<EditBook id={id} />} />
              <Route
                path="/editauthor/:id"
                element={<EditAuthor AuthorId={AuthorId} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
