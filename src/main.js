$ = jQuery = require("jquery");
const React = require("react");
const HomePage = require("./components/HomePage");
const AboutPage = require("./components/about/AboutPage");
const Header = require("./components/common/Header");

class App extends React.Component {
  render() {
    let Child;

    switch (this.props.route) {
      case "About":
        Child = AboutPage;
        break;
      default:
        Child = HomePage;
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
}

const render = () => {
  let route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById("app"));
};

window.addEventListener("hashchange", render);
render();
