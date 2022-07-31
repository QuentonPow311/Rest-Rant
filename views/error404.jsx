const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/404.jpg" alt="404 page" height="500" width="500"/>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
