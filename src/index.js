import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Stories from './stories';
import Posts from './posts';
import Sidebar from './sidebar';
import React from 'react';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
        </React.Fragment>
    )
}

const layout = App();
ReactDOM.render(layout, document.querySelector(".root"))