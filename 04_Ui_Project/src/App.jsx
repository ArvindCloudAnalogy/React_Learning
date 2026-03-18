import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1709701576125-1bbe56a37aa8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "I’m a satisfied client who found exactly what I needed, the experience was smooth, quick, and communication was excellent throughout the entire process.",
      tag: "Satisfied",
      color: "#0f766e"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "As an underserved member, I finally received a dependable solution that addressed core needs and helped bring stability and trust to my financial journey.",
      tag: "Underserved",
      color: "#2563eb"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Underbanked but proud, I finally accessed tools and resources that reduced fees, improved credit access, and made my everyday financial choices more intentional.",
      tag: "UnderBanked",
      color: "#ea580c"
    }
    ,
    {
      img: "https://images.unsplash.com/photo-1741388218394-387e1e2d1bf3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Our underresourced community found important support in programs that delivered training, tools, and local connection to bridge opportunity gaps one step at a time.",
      tag: "UnderResourced",
      color: "#022c22"
    }
    ,
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Desirable customers seek curated experiences, aesthetic excellence, and consistent quality; they value brands that listen, innovate, and exceed expectations with every interaction.",
      tag: "Desirable",
      color: "#be185d"
    }
    ,
    {
      img: "https://plus.unsplash.com/premium_photo-1674389991673-fe25584fb7a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
      intro: "Productive users prioritize efficiency, predictable results, and tools that reduce friction; they respond best to clear workflows, metrics, and regular performance feedback loops.",
      tag: "Productive",
      color: "#047857"
    }
    ,
    {
      img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Sincere customers value authenticity, honesty, and open communication; they remain loyal when brands share progress, admit mistakes, and consistently deliver on meaningful promises.",
      tag: "Sincere",
      color: "#1d4ed8"
    }


  ];


  return (
    <div >
      <Section1 users={users} />
      

    </div>
  )
}

export default App