import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Stories from './stories';
import Posts from './posts';
import Sidebar from './sidebar';

function App() {
    return (
        <div class="root">
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

const layout = App();
ReactDOM.render(layout, document.querySelector(".root"))