import Nav from '@components/Nav'

const layout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout