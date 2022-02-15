import React from "react";
import './App.css';

function App() {
 const array = [
    { nome: 'Aries',
      inicio: "21 de março",
      fim: "20 de abril"
    },
    { nome: 'Touro',
      inicio: "21 de abril",
      fim: "21 de maio"
    },
    { nome: 'Gêmeos',
      inicio: "22 de maio",
      fim: "21 de junho"
    },
    { nome: 'Câncer',
      inicio: "22 de junho",
      fim: "23 de julho"
    },
    { nome: 'Leão',
      inicio: "24 de julho",
      fim: "23 de agosto"
    },
    { nome: 'Virgem',
      inicio: "24 de agosto",
      fim: "21 de setembro"
    },
    { nome: 'Libra',
      inicio: "22 de setembro",
      fim: "23 de outubro"
    },
    { nome: 'Escorpião',
      inicio: "24 de outubro",
      fim: "23 de novembro"
    },
   { nome: 'Sagitário',
      inicio: "24 de novembro",
      fim: "21 de dezembro"
    },
    { nome: 'Capricórnio',
      inicio: "22 de dezembro",
      fim: "21 de janeiro"
    },
    { nome: 'Aquário',
      inicio: "22 de janeiro",
      fim: "19 de fevereiro"
    },
    { nome: 'Peixes',
      inicio: "20 de fevereiro",
      fim: "20 de março"
    }
  ];

    return <div> 
      <h1>Seu Signo é {array[0].nome}</h1>
      <h2>Ele Começa em {array[0].inicio} e Termina em {array[0].fim}</h2>
      </div>;
} 

export default App;
