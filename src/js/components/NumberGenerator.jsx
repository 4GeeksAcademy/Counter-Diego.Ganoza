import { Digito } from "./Digito"

export const NumberGenerator = ({ counter }) => {
    let digito1 = counter % 10;



    let digito2 = Math.floor(counter / 10) % 10;
    let digito3 = Math.floor(counter / 100) % 10;
    let digito4 = Math.floor(counter / 1000) % 10;
    let digito5 = Math.floor(counter / 10000) % 10;
    let digito6 = Math.floor(counter / 100000) % 10;


    return (
        <>
            <Digito number={digito6} />
            <Digito number={digito5} />
            <Digito number={digito4} />
            <Digito number={digito3} />
            <Digito number={digito2} />
            <Digito number={digito1} />
        </>
    )
}