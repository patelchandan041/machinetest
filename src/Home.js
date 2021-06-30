import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DropDown from './component/DropDown'

function Home() {
    return (
        <div className="home">
            <Router>
                <DropDown />
                <Route exact path="/drop1">
                    <p> 
                        <h1>Drop1</h1>
                        A paragraph starts on a new line. Sometimes, paragraphs are indented or numbered. (Whatever format you use, be consistent.)

                        The "perfect paragraph" will start with a topic sentence. It will have detail sentences in the middle and end with a concluding sentence. It will only cover one topic from start to finish. The length of a paragraph is supposed to be determined by the topic, but often writers will create a paragraph simply to ensure they're not presenting too much text in one chunk.
                    </p>
                </Route>
                <Route exact path="/drop2">
                    <h2>Drop2</h2>
                    <p>A paragraph starts on a new line. Sometimes, paragraphs are indented or numbered. (Whatever format you use, be consistent.)

The "perfect paragraph" will start with a topic sentence. It will have detail sentences in the middle and end with a concluding sentence. It will only cover one topic from start to finish. The length of a paragraph is supposed to be determined by the topic, but often writers will create a paragraph simply to ensure they're not presenting too much text in one chunk.</p>
                </Route>
            </Router>

        </div>
    )
}

export default Home