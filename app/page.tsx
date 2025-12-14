import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AlfredoHere from '@/components/sections/AlfredoHere'

export default function Home() {
  return (
    <>
      <div
        className="bg-lightGray"
        style={{
          paddingBottom: 100,
        }}
      >
        <Navbar dark={false} />
        <AlfredoHere
          firstParagraph={`¡Hola mi gente! I'm Alfredo, a fullstack software engineer who likes frontend and working with product teams. I am passionate about creating tools, learning new technologies, and being able to take ideas from one area of ​​knowledge to extrapolate them and apply them in another.`}
          secondParagraph={`I specialize on building blazing fast web applications with React, Redux, NodeJS and Express.Js contributing across the stack with a frontend focus.`}
        />
      </div>
      <div
        className="bg-lightBlack"
        style={{
          paddingBottom: 80,
        }}
      >
        <Footer />
      </div>
    </>
  )
}
