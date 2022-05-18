import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Note } from './models/note.model';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = React.useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Computer Science",
    text: "Learning how computers work is really interesting !",
    color: "whitesmoke",
    date: new Date().toLocaleString()
  }])
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
