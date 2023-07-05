import '../../styles/globals.css';

import Nav from '../../components/Nav';

const layout = ({ children }) => {
  return (
    <html lang="en">
        <body className={"main"}>
            <div className={"left"}>
                <Nav />
            </div>
            <main className={"right"}>
                <div  className={"frame"}>
                    <div className={"window"}>
                        {children}
                    </div>
                </div>
            </main>
        </body>
    </html>
  )
}

export default layout