const React = require('react')
// const Def = require('../default')
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
               
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>



                {html.children}
            <div class="content">
  {/* <h1>Sticky Footer with Flexbox</h1> */}
  <p><button id="add">Add Content</button></p>
</div>

<footer class="footer">
<ul>
    Instagram:Jondoe33_
    
Twitter:Jondoe33
LinkedIN:JonDoe55__
</ul>


</footer>
            </body>
        </html>
    )
  }
  

module.exports = Def 