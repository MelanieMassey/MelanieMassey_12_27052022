import "../style/Page404.css";
import { Link } from "react-router-dom"

function Page404() {
    return (
        <section className="page404Section">
          <h3>404</h3>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="backHomeLink">
            Retourner sur la page d'accueil
          </Link>
        </section>
      )
} 

export default Page404;