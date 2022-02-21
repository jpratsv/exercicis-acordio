/* ACORDEON

1.-Mostrar un títol
2.-En clicar el títol, mostra i amaga un text a sota
3.-Mostrar un segon títol
4.-En clicar el segon títol, mostra i amaga un altre text a sota
5.-Usar un array per diversos títols/text
6.-En clicar un títol, plega qualsevol altre text */

import "./styles.css";
import { useState } from "react";

const acordeon = [
  {
    titol: "item 1",
    detall: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
    rerum recusandae suscipit, iure ratione velit libero, obcaecati eos
    explicabo quibusdam porro ut nihil repellendus? Reprehenderit quis
    voluptates quibusdam totam cumque!`,
  },
  {
    titol: "item 2",
    detall: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
    rerum recusandae suscipit, iure ratione velit libero, obcaecati eos
    explicabo quibusdam porro ut nihil repellendus? Reprehenderit quis
    voluptates quibusdam totam cumque!`,
  },
  {
    titol: "item 3",
    detall: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
    rerum recusandae suscipit, iure ratione velit libero, obcaecati eos
    explicabo quibusdam porro ut nihil repellendus? Reprehenderit quis
    voluptates quibusdam totam cumque!`,
  },
  {
    titol: "item 4",
    detall: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
    rerum recusandae suscipit, iure ratione velit libero, obcaecati eos
    explicabo quibusdam porro ut nihil repellendus? Reprehenderit quis
    voluptates quibusdam totam cumque!`,
  },
];

export default function Acordeon() {
  const [indexTabActual, setIndexTabActual] = useState(0);

  const visualiza = (index) => setIndexTabActual(index);

  return (
    <body>
      {indexTabActual}
      <div className="acordeonvertical">
        <ul>
          {acordeon.map((item, index) => (
            <li>
              <h3
                onClick={() => {
                  visualiza(index);
                }}
              >
                {item.titol}
              </h3>
              {index === indexTabActual && (
                <>
                  <div>{item.detall}</div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}
