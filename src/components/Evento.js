import Button from "./evento/Button"
function Evento (){

    function meuEvento(){
        console.log(`Ativando primeiro Evento!!`)
    }

    function segundoEvento(){
        console.log("Ativando segundo Evento!!")
    }

return (
    <div>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro evento" />
        <Button event={segundoEvento} text="Segundo evento" />
        {/* <button onClick={meuEvento}>Ativar</button> */}
    </div>
    )

}

export default Evento