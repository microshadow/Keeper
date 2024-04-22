import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const log = console.log;
// const getTitles = notes.map((note) => note.title);
// const getContent = notes.map((note) => note.content);
// log(getTitles);

function App(){
    return <div>
        <Header />
        { notes.map((note) => <Note key={note.key} title={note.title} content={note.content}/>) }
        <Footer />
    </div>
}

export default App;