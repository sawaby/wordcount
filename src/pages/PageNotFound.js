import { Link } from "react-router-dom"
import PageNotFoundImage  from "../assets/page-not-found.jpg";

export const PageNotFound = () => {
  return (
    <main>
        <section className="pnf">
            <div>
                <p>Oops - Page Not Found!</p>
                <img src={PageNotFoundImage} alt="" />
                <Link to="/">
                    <button data-testid="homeBtn">Go Back to Word Counter</button>
                </Link>
            </div>
        </section>
    </main>
  )
}
