function SeuNome({ setNome }){

    return (

        
        <div>
            <p>Digite o seu nome</p>
            <input type="text" placeholder="Qual eh o seu nome?" 
            onChange={(e) => setNome(e.target.value)} />
        </div>
    )
}

export default SeuNome